import { FC, useEffect, useRef } from 'react';
import { PictureProps } from './types';

const Picture: FC<PictureProps> = (props) => {
  const { src, placeholder, lazyload = false, ...rest } = props;
  const imgRef = useRef(null);
  useEffect(() => {
    if (!lazyload) {
      return;
    }
    let observerTarget = imgRef.current;
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]['isIntersecting']) {
          if (imgRef.current.src === src) {
            return;
          }
          imgRef.current.src = src;
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
  }, []);

  return <img src={lazyload ? placeholder : src} {...rest} ref={imgRef} />;
};

Picture.displayName = 'Picture';
export default Picture;
