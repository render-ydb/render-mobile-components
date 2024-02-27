# @x.render/render-view

<p>
<a href="https://www.npmjs.com/package/@x.render/render-view" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-view" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-view" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-view" alt="NPM Downloads" /></a>

</p>

[中文文档](./README.zh.md)

## Introduce

For react components encapsulated by div, you can understand that View is a container component used to include any elements and components. View provides appear related events. You can use this feature to do something special.

## Usage

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

## Property

| **Name**      | **Type**        | **Default** | **必填** | **Description**                                                                    |
| ------------- | --------------- | ----------- | -------- | ---------------------------------------------------------------------------------- |
| className     | `string`        | -           | false    | Custom class name                                                                  |
| style         | `CSSProperties` | -           | false    | Custom style                                                                       |
| onClick       | `function`      | -           | false    | click                                                                              |
| onAppear      | `function`      | -           | false    | Fires when the current element is visible                                          |
| onDisappear   | `function`      | -           | false    | Triggered when the current element changes from visible to invisible               |
| onFirstAppear | `function`      | -           | false    | Fires when the current element becomes visible for the first time                  |
| onTouchStart  | `function`      | -           | false    | Touch action starts                                                                |
| onTouchMove   | `function`      | -           | false    | Move after touch                                                                   |
| onTouchEnd    | `function`      | -           | false    | Touch action ends                                                                  |
| onTouchCancel | `function`      | -           | false    | Touch actions are interrupted, such as incoming call reminders and pop-up windows. |

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
