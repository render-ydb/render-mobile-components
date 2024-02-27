import { forwardRef, ForwardRefRenderFunction, useRef, useEffect } from 'react';
import cx from 'classnames/dedupe';
import { ViewProps } from './types';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

const viewAppearId = uuidv4();
const View: ForwardRefRenderFunction<HTMLDivElement, ViewProps> = (
  props,
  ref,
) => {
  let {
    className,
    style,
    children,
    onFirstAppear,
    onAppear,
    onDisappear,
    ...rest
  } = props;
  const firstAppearRef = useRef<Boolean>(false);
  const hasAppearRef = useRef<Boolean>(false);
  useEffect(() => {
    if (!onAppear && !onFirstAppear && !onDisappear) {
      return;
    }
    let observerTarget = document.querySelector(
      `[data-view-id="${viewAppearId}"]`,
    );
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]['isIntersecting']) {
          hasAppearRef.current = true;
          if (onAppear) {
            onAppear();
          }
          if (!firstAppearRef.current && onFirstAppear) {
            onFirstAppear();
            firstAppearRef.current = true;
          }
        } else if (hasAppearRef.current && onDisappear) {
          onDisappear();
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    );
    observer.observe(observerTarget);
    return () => {
      observer.unobserve(observerTarget);
      observer.disconnect();
      observer = null;
      observerTarget = null;
    };
  }, [onAppear, onFirstAppear, onDisappear]);
  return (
    <div
      {...rest}
      ref={ref}
      style={style}
      className={cx('render-view-v1', className)}
      data-view-id={viewAppearId}
    >
      {children}
    </div>
  );
};
View.displayName = 'View';
export default forwardRef(View);
