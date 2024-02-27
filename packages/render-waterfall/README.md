# @x.render/render-waterfall

<p>
<a href="https://www.npmjs.com/package/@x.render/render-waterfall" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-waterfall" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-waterfall" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-waterfall" alt="NPM Downloads" /></a>

</p>

[中文文档](./README.zh.md)

## Introduce

List container for implementing waterfall flow

## Usage

```bash
$ npm install @x.render/render-waterfall --save
```

```jsx
import View from "@x.render/render-view";
import Text from "@x.render/render-text";
import Waterfall from "@x.render/render-waterfall";
import { useState } from "react";

let data = [
  { height: 550, item: {} },
  { height: 624, item: {} },
  { height: 708, item: {} },
  { height: 600, item: {} },
  { height: 300, item: {} },
  { height: 100, item: {} },
  { height: 400, item: {} },
  { height: 550, item: {} },
  { height: 624, item: {} },
  { height: 708, item: {} },
  { height: 600, item: {} },
  { height: 300, item: {} },
  { height: 100, item: {} },
  { height: 400, item: {} },
];

const App = () => {
  const [dataSource, setDataSoruce] = useState(data);

  const loadMore = () => {
    setTimeout(() => {
      setDataSoruce(dataSource.concat(dataSource));
    }, 1000);
  };

  return (
    <View
      style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <View>first module</View>
      <Waterfall
        columnWidth={150}
        columnCount={4}
        columnGap={50}
        dataSource={dataSource}
        renderHeader={() => {
          return [
            <View
              key="1"
              style={{
                width: 750,
                height: 100,
                backgroundColor: "yellow",
                marginBottom: 20,
              }}
            >
              header1
            </View>,
            <View
              key="2"
              style={{
                width: 750,
                height: 100,
                backgroundColor: "green",
                marginBottom: 20,
              }}
            >
              header2
            </View>,
          ];
        }}
        renderFooter={() => {
          return (
            <View
              key="3"
              style={{
                width: 750,
                height: 300,
                backgroundColor: "blue",
                marginTop: 20,
              }}
            >
              footer1
            </View>
          );
        }}
        renderItem={(item, index) => {
          return (
            <View
              key={index}
              style={{
                height: item.height,
                backgroundColor: "red",
                marginBottom: 20,
              }}
            >
              <Text>{index}</Text>
              {/* {index} */}
            </View>
          );
        }}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default App;
```

## Property

| **Name**              | **Type**   | **Default** | **Required** | **Description**                                                                 |
| --------------------- | ---------- | ----------- | ------------ | ------------------------------------------------------------------------------- |
| dataSource            | `array`    | -           | true         | Waterfall array, module height needs to be passed in                            |
| renderItem            | `function` | -           | true         | Render a template for each item                                                 |
| renderHeader          | `function` | -           | false        | Render header part                                                              |
| renderFooter          | `function` | -           | false        | Render footer part                                                              |
| columnWidth           | `number`   | 750         | false        | column width                                                                    |
| columnCount           | `number`   | 1           | false        | Number of columns                                                               |
| columnGap             | `number`   | 0           | false        | column spacing                                                                  |
| onEndReachedThreshold | `number`   | 500         | false        | Set the offset to load more                                                     |
| onEndReached          | `function` | -           | false        | Triggered when the length of `onEndReachedThreshold` is left in the scroll area |
| leftGap               | `number`   | 0           | false        | gap to the left                                                                 |
| rightGap              | `number`   | 0           | false        | gap to the right                                                                |

## Methods

### scrollTo({x: number,y: number, animated?: boolean, duration?: number})

#### params

**The parameter is `object`, containing the following properties**

| **Name** | **Type**  | **Default** | **Required** | **Description**                                                                                             |
| -------- | --------- | ----------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| x        | `number`  | -           | No           | horizontal offset                                                                                           |
| y        | `number`  | -           | No           | vertical offset                                                                                             |
| animated | `boolean` | `true`      | No           | Use animated transitions when setting scrollbar position                                                    |
| duration | `number`  | 400         | No           | When `animated` is set to `true`, duration can be set to control the execution time of the animation in `ms |
