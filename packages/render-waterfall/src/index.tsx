import {
  FC,
  cloneElement,
  forwardRef,
  memo,
  ForwardRefRenderFunction,
} from 'react';
import View from 'render-view';
import ScrollView from 'render-scrollview';
import { ScrollViewRefObject } from 'render-scrollview/build/lib/types';
import omit from './util';
import { WaterFallProps } from './types';

let styles = {
  waterfallWrap: {
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
const Header = memo((props) => {
  return <View {...props} />;
});

const WebFall: FC<WaterFallProps> = memo((props) => {
  const {
    renderItem = () => {},
    dataSource,
    columnCount = 1,
    leftGap = 0,
    rightGap = 0,
    columnWidth,
  } = props;
  let columns = [];
  let moduleHeights = [];
  for (let i = 0; i < columnCount; i++) {
    columns[i] = [];
    moduleHeights[i] = 0;
  }

  dataSource &&
    dataSource.forEach((item, i) => {
      let targetColumnIndex = 0;
      let minHeight = moduleHeights[0];

      for (let j = 0; j < columnCount; j++) {
        if (moduleHeights[j] < minHeight) {
          minHeight = moduleHeights[j];
          targetColumnIndex = j;
        }
      }
      moduleHeights[targetColumnIndex] += item.height;
      columns[targetColumnIndex].push(item);
    });
  const wrapStyle = Object.assign({}, styles.waterfallWrap, {
    marginLeft: leftGap + 'rpx',
    marginRight: rightGap + 'rpx',
  });
  return (
    // @ts-ignore
    <View style={wrapStyle}>
      {columns.map((column, index) => {
        return (
          <View key={'column' + index} style={{ width: columnWidth }}>
            {column.map((item, j) => {
              return renderItem(item, 'c_' + index + j);
            })}
          </View>
        );
      })}
    </View>
  );
});

const WaterFall: ForwardRefRenderFunction<
ScrollViewRefObject,
WaterFallProps
> = (props, scrollviewRef) => {
  const { renderHeader, renderFooter } = props;
  const _header = typeof renderHeader === 'function' ? renderHeader() : null;
  const _footer = typeof renderFooter === 'function' ? renderFooter() : null;
  const header = Array.isArray(_header) ? _header : [_header];
  const footer = Array.isArray(_footer) ? _footer : [_footer];

  let cells = header.map((child, index) => {
    if (child) {
      if (child.type !== Header) {
        // @ts-ignore
        return <Header key={'waterfall_header_' + index}>{child}</Header>;
      } else {
        return cloneElement(child, {});
      }
    }
  });
  cells = cells.concat(<WebFall key={'waterfall_webfall'} {...props} />);

  cells = cells.concat(
    footer.map((child, index) => {
      if (child) {
        if (child.type != Header) {
          // @ts-ignore
          return <Header key={'waterfall_footer_' + index}>{child}</Header>;
        } else {
          return cloneElement(child, {});
        }
      }
    }),
  );

  const omittedProps = omit(props, [
    'dataSource',
    'renderItem',
    'renderHeader',
    'renderFooter',
    'columnWidth',
    'columnCount',
    'columnGap',
    'leftGap',
    'rightGap',
  ]);

  return (
    <ScrollView {...omittedProps} ref={scrollviewRef}>
      {cells}
    </ScrollView>
  );
};

WaterFall.displayName = 'WaterFall';
// @ts-ignore
WaterFall.Header = Header;

export default forwardRef(WaterFall);
