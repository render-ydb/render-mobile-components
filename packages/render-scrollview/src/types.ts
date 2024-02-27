import { CSSProperties } from 'react';

export interface ScrollViewRefObject {
  _nativeNode: HTMLDivElement;
  resetScroll: () => void;
  scrollTo: (options?: {
    x?: number | string;
    y?: number | string;
    animated?: boolean;
  }) => void;
  scrollIntoView: (options?: {
    id?: string;
    animated?: boolean;
    duration?: number;
    offsetX?: number;
    offsetY?: number;
  }) => void;
}

export interface ScrollEvent extends React.MouseEvent<HTMLDivElement> {
  readonly contentOffset: {
    x: number;
    y: number;
  };
  readonly contentSize: {
    width: number;
    height: number;
  };
}
export interface ScrollViewProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollEventThrottle?: number;
  horizontal?: boolean;
  contentContainerStyle?: CSSProperties;
  disableScroll?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  onEndReachedThreshold?: number | string;
  onEndReached?: (e: ScrollEvent) => void;
}
