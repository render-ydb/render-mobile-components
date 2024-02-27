import { FC, useRef, useEffect } from 'react';
import omit from 'omit.js';
import cx from 'classnames/dedupe';
import { VideoProps } from './types';
import './index.css';

const noop = () => {};
const Video: FC<VideoProps> = (props, ref) => {
  const {
    className,
    style,
    controls,
    playControl,
    autoPlay,
    onPlayError = noop,
  } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  // @ts-ignore
  const common = omit(props, ['className', 'controls', 'style', 'playControl']);

  if (controls == undefined || controls === true) {
    // @ts-ignore
    common.controls = true;
  } else {
    // @ts-ignore
    common.controls = false;
  }
  common.autoPlay = playControl === 'play' || autoPlay;
  if (common.autoPlay === false) {
    delete common.autoPlay; // In W3C standard, if the attribute is set, it will be treated as true regardless of its value
  }

  useEffect(() => {
    const node = videoRef.current;
    if (playControl !== undefined) {
      if (playControl === 'play') {
        const playPromise = node.play(); // Should return a Promise https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            onPlayError(error);
          });
        }
      } else {
        node.pause();
      }
    }
  }, [playControl]);
  return (
    <video
      {...common}
      className={cx('render-video-v1', className)}
      ref={videoRef}
      style={style}
      playsInline
      src={props.src}
    />
  );
};

Video.displayName = 'video';

export default Video;
