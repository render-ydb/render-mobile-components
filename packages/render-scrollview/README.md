# @x.render/render-scrollview

<p>
<a href="https://www.npmjs.com/package/@x.render/render-scrollview" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-scrollview" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-scrollview" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-scrollview" alt="NPM Downloads" /></a>

</p>

[中文文档](./README.zh.md)

## Introduce

ScrollView is a component that wraps scrolling operations. A certain height is needed to ensure the normal display of ScrollView.

## Install

```bash
$ npm install @x.render/render-scrollview --save
```

## Property

| **Name**                       | **Type**   | **Default** | **Required** | **Description**                                                                                              |
| ------------------------------ | ---------- | ----------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| scrollEventThrottle            | `number`   | 50          | false        | Controls the frequency with which the scroll event is called during scrolling, used for scrolling throttling |
| horizontal                     | `boolean`  | -           | false        | Set to scroll horizontally                                                                                   |
| scrollTop                      | `number`   | 0           | false        | Vertical scrolling distance, priority is higher than `scrollTo` method                                       |
| scrollLeft                     | `number`   | 0           | false        | Horizontal scrolling distance, priority is higher than `scrollTo` method                                     |
| showsHorizontalScrollIndicator | `boolean`  | true        | false        | Whether to allow horizontal scroll bars to appear                                                            |
| showsVerticalScrollIndicator   | `boolean`  | true        | false        | Whether to allow vertical scroll bars to appear                                                              |
| onEndReached                   | `function` | -           | false        | Triggered when the length of `onEndReachedThreshold` is left in the scroll area                              |
| onScroll                       | `function` | -           | false        | Event triggered when scrolling, returns the current horizontal and vertical distance of scrolling            |
| onTouchMove                    | `function` | -           | false        | The event triggered by touchMove returns touch point data (touches, changedTouches)                          |
| onTouchEnd                     | `function` | -           | false        | The event triggered by touchEnd returns touch point data (touches, changedTouches)                           |
| disableScroll                  | `boolean`  | -           | false        | Whether to disable scrolling                                                                                 |

## Methods

### scrollTo({x: number,y: number, animated?: boolean, duration?: number})

#### Params

**The parameter is `object`, containing the following properties**

| **Name** | **Type**  | **Default** | **Required** | **Description**                                                                                             |
| -------- | --------- | ----------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| x        | `number`  | -           | No           | horizontal offset                                                                                           |
| y        | `number`  | -           | No           | vertical offset                                                                                             |
| animated | `boolean` | `true`      | No           | Use animated transitions when setting scrollbar position                                                    |
| duration | `number`  | 400         | No           | When `animated` is set to `true`, duration can be set to control the execution time of the animation in `ms |

### scrollIntoView({id: string, animated?: boolean, duration?: number, offsetX?: number, offsetY?: number})

#### Params

**The parameter is `object`, containing the following properties**
| **Name** | **Type** | **Default** | **Required** | **Description** |
| -------- | --------- | ---------- | -------- | --------------------------------------------------------------------------------- |
| id | `string` | - | Yes |The element `id` that needs to be scrolled to |
| animated | `boolean` | `true` | No | Use animated transitions when setting scrollbar position |
| duration | `number` | 400 | No | When `animated` is set to `true`, duration can be set to control the execution time of the animation in `ms` |
| offsetX | `number` | - | No | Extra X offset for scrolling |
| offsetY | `number` | - | No | Extra Y offset for scrolling|

## Demo

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
    console.log("Hit bottom");
  };
  const handlePositionScroll = () => {
    scrollViewRef.current.scrollIntoView({ id: "password" });
  };
  return (
    <>
      <div>
        <span onClick={handleViewScroll}>view scroll</span>
        <span onClick={handleResetScroll}>reset scroll</span>
        <span onClick={handlePositionScroll}>
          Specify the element to scroll to
        </span>
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
