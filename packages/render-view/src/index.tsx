import { forwardRef, ForwardRefRenderFunction, useRef, useEffect } from 'react';
import { ViewProps } from './types';
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
  return (
    <div ref={domRef}>
      <div
        {...rest}
        ref={ref}
        style={style}
        className={className}
      >
        {children}
      </div>
    </div>
  );
};
View.displayName = 'View';
export default forwardRef(View);
