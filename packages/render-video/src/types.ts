import React from 'react';

export interface VideoProps extends React.HTMLAttributes<HTMLVideoElement> {
  autoPlay?: boolean;
  playControl?: 'play' | 'pause';
  poster?: string;
  controls?: boolean;
  src: string;
  onPlayError?: (e: any) => void;
}
