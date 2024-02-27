# render-view

## 描述

经过 div 封装后的 react 组件，你可以理解 View 是一个容器组件，用于包括任何元素和组件。View 提供 appear 相关事件，你可以利用此特性，做一些特别的事情

## 安装

```bash
$ npm install render-view --save
```

## 属性

| **属性**      | **类型**        | **默认值** | **必填** | **描述**                         |
| ------------- | --------------- | ---------- | -------- | -------------------------------- |
| className     | `string`        | -          | false    | 自定义样式名                     |
| style         | `CSSProperties` | -          | false    | 自定义样式                       |
| onClick       | `function`      | -          | false    | 点击                             |
| onAppear      | `function`      | -          | false    | 当前元素可见时触发               |
| onDisappear   | `function`      | -          | false    | 当前元素从可见变为不可见时触发   |
| onFirstAppear | `function`      | -          | false    | 当前元素首次可见时触发           |
| onTouchStart  | `function`      | -          | false    | 触摸动作开始                     |
| onTouchMove   | `function`      | -          | false    | 触摸后移动                       |
| onTouchEnd    | `function`      | -          | false    | 触摸动作结束                     |
| onTouchCancel | `function`      | -          | false    | 触摸动作被打断，如来电提醒，弹窗 |

## 示例

```jsx
import { useRef, useEffect } from "react";
import View from "render-view";

const App = () => {
  const viewRef = useRef(null);
  useEffect(() => {});
  return (
    <View
      ref={viewRef}
      style={{
        padding: "30rpx",
      }}
      onClick={() => {
        alert("container was clicked!");
      }}
    >
      <View
        style={{
          width: "300rpx",
          height: "300rpx",
          backgroundColor: "red",
        }}
        onClick={(e) => {
          e.stopPropagation();
          alert("red was clicked");
        }}
      />
      <View
        style={{
          width: "300rpx",
          height: "300rpx",
          backgroundColor: "green",
          position: "absolute",
          top: "20rpx",
          left: "20rpx",
        }}
        onClick={() => {
          alert("green was clicked");
        }}
      />
      <View
        style={{
          width: "300rpx",
          height: "300rpx",
          backgroundColor: "yellow",
          position: "absolute",
          top: "80rpx",
          left: "210rpx",
        }}
        onClick={(e) => {}}
      />
    </View>
  );
};
export default App;
```

## 默认样式

render-view 默认样式如下：

```css
.render-view-v1 {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-content: flex-start;
  border: 0 solid black;
  margin: 0;
  padding: 0;
  min-width: 0;
}
```
