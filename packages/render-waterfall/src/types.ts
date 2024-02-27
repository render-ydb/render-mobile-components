export interface WaterFallItem {
  height: number;
  item: any;
}
export interface WaterFallProps {
  /**
   * waterfall stream array, need to pass module height
   * (瀑布流数组，需要传入模块高度)
   */
  dataSource: WaterFallItem[];

  /**
   * render each template
   * (渲染每项的模板)
   * @param item
   * @param {number} index
   */
  renderItem: (item: any, index: number | string) => void;

  /**
   * rendering header section
   * (渲染 header 部分)
   */
  renderHeader?: () => void;

  /**
   * render footer section
   * (渲染 footer 部分)
   */
  renderFooter?: () => void;

  /**
   * column width
   *(列宽)
   */
  columnWidth?: number;

  /**
   * column count
   * (列数)
   */
  columnCount?: number;

  /**
   * column spacing
   * (列间距)
   */
  columnGap?: number;

  /**
   * left spacing
   * (左列间距)
   */
  leftGap?: number;

  /**
   * right spacing
   * 右列间距)
   */
  rightGap?: number;

  /**
   * scroll to bottom trigger event
   * (滚动到底部触发事件)
   */
  onEndReached?: () => void;

  /**
   * trigger lazy loading distance
   * 触发懒加载距离()
   */
  onEndReachedThreshold?: number;
}

// export interface WaterFallProps {
//   renderHeader?: () => React.ReactElement;
//   renderFooter?: () => React.ReactElement;
//   columnWidth?: number;
// }
