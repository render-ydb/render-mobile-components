import {
  forwardRef,
  ForwardRefRenderFunction,
  useRef,
  useEffect,
  useImperativeHandle,
} from 'react';
import { ViewProps } from './types';
import cx from 'classnames/dedupe';
import './index.css';

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
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!onAppear && !onFirstAppear && !onDisappear) {
      return;
    }
    let observerTarget = domRef.current;
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

  useImperativeHandle(ref, () => domRef.current);

  return (
    <div
      {...rest}
      ref={domRef}
      style={style}
      className={cx('render-view-v1', className)}
    >
      {children}
    </div>
  );
};
View.displayName = 'View';
export default forwardRef(View);
