# @x.render/render-view

<p>
<a href="https://www.npmjs.com/package/@x.render/render-view" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-view" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-view" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-view" alt="NPM Downloads" /></a>

</p>

[英文文档](./README.md)

## 描述

经过 div 封装后的 react 组件，你可以理解 View 是一个容器组件，用于包括任何元素和组件。View 提供 appear 相关事件，你可以利用此特性，做一些特别的事情

## 使用

```bash
$ npm install @x.render/render-view --save
```

```jsx
import { useRef, useEffect } from "react";
import View from "@x.render/render-view";

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

## Default style

The default style of render-view is as follows:

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
