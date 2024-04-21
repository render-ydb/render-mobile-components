import { useState, Fragment, FC } from 'react';
import View from '@x.render/render-view';
import cx from 'classnames/dedupe';
import { PullRefreshProps } from './types';
import './index.css';

const PullRefresh: FC<PullRefreshProps> = (props) => {
  const {
    className,
    style = {},
    disabled = false,
    renderRefresh = () => null,
    onRefresh,
  } = props;

  const [startY, setStartY] = useState(0);
  const [start, setStart] = useState(false);

  return (
    <Fragment>
      {start && typeof renderRefresh === 'function' && renderRefresh()}
      <View
        className={cx('render-pullRefresh-container', className)}
        style={style}
        onTouchStart={(e) => {
          if (e.currentTarget.scrollTop) {
            return;
          }
          setStartY(e.touches[0].pageY);
        }}
        onTouchMove={(e) => {
          if (disabled || e.currentTarget.scrollTop) return;
          let y = e.touches[0].pageY;
          let m = y - startY;
          // 触摸位置判断 && 列表当前滚动到最上面
          if (m > 0 && m < 120 && y < 750 && e.currentTarget.scrollTop < 10) {
            setStart(true);
            e.currentTarget.style.transform = `translateY(${m * 0.9}px)`;
          }
        }}
        onTouchEnd={(e) => {
          if (start) {
            onRefresh ? onRefresh() : window.location.reload();
          }
          setStart(false);
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        onTouchCancel={(e) => {
          setStart(false);
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {props.children}
      </View>
    </Fragment>
  );
};

export default PullRefresh;
