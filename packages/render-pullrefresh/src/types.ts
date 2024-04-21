import { CSSProperties } from 'react';

export interface PullRefreshProps {
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  renderRefresh?: (...args) => any;
  onRefresh?: (...args) => void;
  children?: any;
}
