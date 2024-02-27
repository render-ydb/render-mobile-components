import {
  forwardRef,
  ForwardRefRenderFunction,
  CSSProperties,
  useRef,
  useImperativeHandle,
} from 'react';
import View from 'render-view';
import cx from 'classnames';
import throttle from './throttle';
import Timer from './timer';
import { ScrollViewProps, ScrollViewRefObject } from './types';
import './index.css';

type strOrNum = string | number;

const FULL_WIDTH = 750;
const ANIMATION_DURATION = 400;
const STYLE_NODE_ID = 'render-scrollview-style';
const baseCls = 'render-scrollview';
let pixelRatio;

function scrollTo(
  scrollerRef: any,
  x: strOrNum,
  y: strOrNum,
  animated: boolean,
  duration: number,
) {
  const scrollView = scrollerRef.current;
  const scrollLeft = scrollView.scrollLeft;
  const scrollTop = scrollView.scrollTop;
  if (animated) {
    const timer = new Timer({
      duration,
      easing: 'easeOutSine',
      onRun: (e) => {
        if (scrollerRef && scrollerRef.current) {
          // @ts-ignore
          if (x >= 0) {
            scrollerRef.current.scrollLeft =
              // @ts-ignore
              scrollLeft + e.percent * (x - scrollLeft);
          }
          // @ts-ignore
          if (y >= 0) {
            scrollerRef.current.scrollTop =
              // @ts-ignore
              scrollTop + e.percent * (y - scrollTop);
          }
        }
      },
    });
    timer.run();
  } else {
    // @ts-ignore
    if (x >= 0) {
      scrollerRef.current.scrollLeft = x;
    }
    // @ts-ignore
    if (y >= 0) {
      scrollerRef.current.scrollTop = y;
    }
  }
}

const getPixelRatio = () => {
  if (pixelRatio) {
    return pixelRatio;
  }
  pixelRatio = document.documentElement.clientWidth / FULL_WIDTH;
  return pixelRatio;
};

const translateToPx = (origin: strOrNum): number => {
  const _pixelRatio = getPixelRatio();
  if (typeof origin === 'number') {
    return origin * _pixelRatio;
  }
  const matched = /^(\d+)(r{0,1}px){0,1}$/.exec(origin);
  if (matched) {
    if (!matched[2]) {
      return parseInt(matched[1]) * _pixelRatio;
    }
    if (matched[2] === 'rpx') {
      return parseInt(matched[1]) * _pixelRatio;
    }
    if (matched[2] === 'px') {
      return parseInt(matched[1]);
    }
  }
  return 0;
};

const ScrollView: ForwardRefRenderFunction<
ScrollViewRefObject,
ScrollViewProps
> = (props, ref) => {
  let {
    className,
    style,
    horizontal,
    contentContainerStyle,
    disableScroll,
    scrollEventThrottle,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    onEndReached,
    onEndReachedThreshold,
    children,
    ...rest
  } = props;

  const lastScrollDistance = useRef(0);
  const lastScrollContentSize = useRef(0);
  const scrollerNodeSize = useRef(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e) => {
    if (props.onScroll) {
      const elm = e.target || e.srcElement || {};
      e.nativeEvent = {
        get contentOffset() {
          return {
            x: elm.scrollLeft,
            y: elm.scrollTop,
          };
        },
        get contentSize() {
          return {
            width: elm.scrollWidth,
            height: elm.scrollHeight,
          };
        },
      };
      props.onScroll(e);
    }
    if (onEndReached) {
      const scrollerNode = scrollerRef.current;
      if (!scrollerNode) return;
      scrollerNodeSize.current = horizontal
        ? scrollerNode.offsetWidth
        : scrollerNode.offsetHeight;
      // NOTE：in iOS7/8 offsetHeight/Width is is inaccurate （ use scrollHeight/Width ）
      const scrollContentSize = horizontal
        ? scrollerNode.scrollWidth
        : scrollerNode.scrollHeight;
      const scrollDistance = horizontal
        ? scrollerNode.scrollLeft
        : scrollerNode.scrollTop;

      const endReachedThreshold = translateToPx(onEndReachedThreshold);

      const isEndReached =
        scrollContentSize - scrollDistance - scrollerNodeSize.current <=
        endReachedThreshold;

      const isScrollToEnd = scrollDistance > lastScrollDistance.current;
      const isLoadedMoreContent =
        scrollContentSize != lastScrollContentSize.current;
      if (isEndReached && isScrollToEnd && isLoadedMoreContent) {
        lastScrollContentSize.current = scrollContentSize;

        props.onEndReached(e);
      }
      lastScrollDistance.current = scrollDistance;
    }
  };

  useImperativeHandle(ref, () => ({
    _nativeNode: scrollerRef.current,
    resetScroll() {
      lastScrollContentSize.current = 0;
      lastScrollDistance.current = 0;
    },
    scrollTo(options?: {
      x?: strOrNum;
      y?: strOrNum;
      animated?: boolean;
      duration?: number;
    }) {
      const {
        x = 0,
        y = 0,
        animated = true,
        duration = ANIMATION_DURATION,
      } = options || {};
      scrollTo(
        scrollerRef,
        translateToPx(x),
        translateToPx(y),
        animated,
        duration,
      );
    },
    scrollIntoView(
      options: {
        id?: string;
        animated?: boolean;
        duration?: number;
        offsetX?: number;
        offsetY?: number;
      } = {},
    ) {
      const {
        id,
        animated = true,
        duration = ANIMATION_DURATION,
        offsetX,
        offsetY,
      } = options || {};
      if (!id) {
        throw new Error('Params missing id.');
      }
      const targetElement = document.getElementById(id);
      if (targetElement && contentContainerRef.current) {
        const targetRect = targetElement.getBoundingClientRect();
        const contentContainerRect =
          contentContainerRef.current.getBoundingClientRect();
        const scrollX =
          targetRect.x - contentContainerRect.x + translateToPx(offsetX);
        const scrollY =
          targetRect.y - contentContainerRect.y + translateToPx(offsetY);
        scrollTo(scrollerRef, scrollX, scrollY, animated, duration);
      }
    },
  }));

  if (style) {
    const childLayoutProps = ['alignItems', 'justifyContent'].filter(
      (prop) => style[prop] !== undefined,
    );
    if (childLayoutProps.length !== 0) {
      console.warn(
        'ScrollView child layout (' +
          JSON.stringify(childLayoutProps) +
          ') must be applied through the contentContainerStyle prop.',
      );
    }
  }

  const contentContainer = (
    <View
      ref={contentContainerRef}
      className={cx({
        [`${baseCls}-content-container-horizontal`]: horizontal,
        [`${baseCls}-webcontainer`]: !horizontal,
      })}
      style={contentContainerStyle}
    >
      {children}
    </View>
  );
  const scrollerStyle: CSSProperties = {
    ...style,
  };

  if (scrollerStyle.height === null || scrollerStyle.height === undefined) {
    scrollerStyle.flex = 1;
  }
  const cls = cx(
    baseCls,
    `${baseCls}-${horizontal ? 'horizontal' : 'vertical'}`,
    className,
  );
  let showsScrollIndicator = horizontal
    ? showsHorizontalScrollIndicator
    : showsVerticalScrollIndicator;
  if (
    !showsScrollIndicator &&
    typeof document !== 'undefined' &&
    typeof document.getElementById === 'function' &&
    !document.getElementById(STYLE_NODE_ID)
  ) {
    let styleNode = document.createElement('style');
    styleNode.id = STYLE_NODE_ID;
    document.head.appendChild(styleNode);
    styleNode.innerHTML = `.${baseCls}::-webkit-scrollbar{display: none;}`;
  }
  scrollerStyle.WebkitOverflowScrolling = 'touch';
  if (horizontal) {
    // Don't use scrollerStyle.overflow = 'scroll hidden';
    // Multiple keyword syntax for overflow-x and overflow-y is not work in iOS
    // https://caniuse.com/mdn-css_properties_overflow_multiple_keywords
    scrollerStyle.overflowX = 'scroll';
    scrollerStyle.overflowY = 'hidden';
  } else {
    scrollerStyle.overflowX = 'hidden';
    scrollerStyle.overflowY = 'scroll';
  }
  if (disableScroll) {
    scrollerStyle.overflowX = 'hidden';
    scrollerStyle.overflowY = 'hidden';
  }
  return (
    <View
      {...rest}
      ref={scrollerRef}
      className={cls}
      style={scrollerStyle}
      onScroll={
        scrollEventThrottle
          ? throttle(handleScroll, scrollEventThrottle)
          : handleScroll
      }
    >
      {contentContainer}
    </View>
  );
};

ScrollView.displayName = 'ScrollView';
export default forwardRef(ScrollView);
