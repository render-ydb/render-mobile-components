# @x.render/render-scrollview

<p>
<a href="https://www.npmjs.com/package/@x.render/render-scrollview" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-scrollview" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-scrollview" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-scrollview" alt="NPM Downloads" /></a>

</p>

[英文文档](./README.md)

## 描述

ScrollView 是一个包装了滚动操作的组件。需要一个确定的高度来保证 ScrollView 的正常展现。

## 安装

```bash
$ npm install @x.render/render-scrollview --save
```

## 属性

| **属性**                       | **类型**   | **默认值** | **必填** | **描述**                                                          |
| ------------------------------ | ---------- | ---------- | -------- | ----------------------------------------------------------------- |
| scrollEventThrottle            | `number`   | 50         | false    | 这个属性控制在滚动过程中，scroll 事件被调用的频率，用于滚动的节流 |
| horizontal                     | `boolean`  | -          | false    | 设置为横向滚动                                                    |
| scrollTop                      | `number`   | 0          | false    | 竖向滚动距离，优先级高于`scrollTo`方法                            |
| scrollLeft                     | `number`   | 0          | false    | 横向滚动距离，优先级高于`scrollTo`方法                            |
| showsHorizontalScrollIndicator | `boolean`  | true       | false    | 是否允许出现水平滚动条                                            |
| showsVerticalScrollIndicator   | `boolean`  | true       | false    | 是否允许出现垂直滚动条                                            |
| onEndReached                   | `function` | -          | false    | 滚动区域还剩`onEndReachedThreshold`的长度时触发                   |
| onScroll                       | `function` | -          | false    | 滚动时触发的事件，返回当前滚动的水平垂直距离                      |
| onTouchMove                    | `function` | -          | false    | touchMove 触发的事件，返回触摸点数据（touches、changedTouches）   |
| onTouchEnd                     | `function` | -          | false    | touchEnd 触发的事件，返回触摸点数据（touches、changedTouches）    |
| disableScroll                  | `boolean`  | -          | false    | 是否禁止滚动                                                      |

## 方法

### scrollTo({x: number,y: number, animated?: boolean, duration?: number})

#### 参数

**参数为 object，包含以下属性**

| **属性** | **类型**  | **默认值** | **必填** | **描述**                                                                          |
| -------- | --------- | ---------- | -------- | --------------------------------------------------------------------------------- |
| x        | `number`  | -          | 否       | 横向的偏移量                                                                      |
| y        | `number`  | -          | 否       | 纵向的偏移量                                                                      |
| animated | `boolean` | `true`     | 否       | 在设置滚动条位置时使用动画过渡                                                    |
| duration | `number`  | 400        | 否       | 当 `animated` 设置为 `true` 时，可以设置 duration 来控制动画的执行时间，单位 `ms` |

### scrollIntoView({id: string, animated?: boolean, duration?: number, offsetX?: number, offsetY?: number})

#### 参数

**参数为 `object`，包含以下属性**

| **属性** | **类型**  | **默认值** | **必填** | **描述**                                                                          |
| -------- | --------- | ---------- | -------- | --------------------------------------------------------------------------------- |
| id       | `string`  | -          | 是       | 需要滚动到的元素 `id`                                                             |
| animated | `boolean` | `true`     | 否       | 在设置滚动条位置时使用动画过渡                                                    |
| duration | `number`  | 400        | 否       | 当 `animated` 设置为 `true` 时，可以设置 duration 来控制动画的执行时间，单位 `ms` |
| offsetX  | `number`  | -          | 否       | 滚动的额外 X 偏移                                                                 |
| offsetY  | `number`  | -          | 否       | 滚动的额外 Y 偏移                                                                 |

## 示例

```jsx
import { useRef } from "react";
import ScrollView from "@x.render/render-scrollview";
import { ScrollViewRefObject } from "@x.render/render-scrollview/build/lib/types";
import styles from "./index.module.css";
import logopng from "./logo.jpeg";

const App = () => {
  const scrollViewRef = useRef < ScrollViewRefObject > null;
  const handleViewScroll = () => {
    console.log(scrollViewRef.current.scrollTo({ y: 50 }));
  };
  const handleResetScroll = () => {
    scrollViewRef.current._nativeNode.scrollTop = 0;
  };
  const handleOnScroll = (e) => {
    console.log(e);
  };
  const handleOnEndReached = () => {
    console.log("触底了");
  };
  const handlePositionScroll = () => {
    scrollViewRef.current.scrollIntoView({ id: "password" });
  };
  return (
    <>
      <div>
        <span onClick={handleViewScroll}>查看滚动</span>
        <span onClick={handleResetScroll}>恢复滚动</span>
        <span onClick={handlePositionScroll}>指定滚动到的元素</span>
      </div>
      <ScrollView
        scrollEventThrottle={200}
        onScroll={handleOnScroll}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={50}
        ref={scrollViewRef}
        style={{
          height: "50vh",
        }}
      >
        <div className={styles.container}>
          <img className={styles.image} src={logopng} />
          <p className={styles.text}>
            <span className={styles.letter}>Powered</span>
            <span className={styles.letter}>&nbsp;</span>
            <span className={styles.letter}>by</span>
            <span className={styles.letter}>&nbsp;</span>
            <span className={styles.letter}>render</span>
            <span className={styles.letter}>&nbsp;</span>
          </p>
        </div>
      </ScrollView>
    </>
  );
};
export default App;
```
