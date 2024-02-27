# @x.render/render-waterfall

<p>
<a href="https://www.npmjs.com/package/@x.render/render-waterfall" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-waterfall" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-waterfall" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-waterfall" alt="NPM Downloads" /></a>

</p>

[英文文档](./README.md)

## 描述

用于实现瀑布流的列表容器

## 使用

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

## 属性

| **属性**              | **类型**   | **默认值** | **必填** | **描述**                                        |
| --------------------- | ---------- | ---------- | -------- | ----------------------------------------------- |
| dataSource            | `array`    | -          | true     | 瀑布流数组，需要传入模块高度                    |
| renderItem            | `function` | -          | true     | 渲染每项的模板                                  |
| renderHeader          | `function` | -          | false    | 渲染 header 部分                                |
| renderFooter          | `function` | -          | false    | 渲染 footer 部分                                |
| columnWidth           | `number`   | 750        | false    | 列宽                                            |
| columnCount           | `number`   | 1          | false    | 列数                                            |
| columnGap             | `number`   | 0          | false    | 列间距                                          |
| onEndReachedThreshold | `number`   | 500        | false    | 设置加载更多的偏移                              |
| onEndReached          | `function` | -          | false    | 滚动区域还剩`onEndReachedThreshold`的长度时触发 |
| leftGap               | `number`   | 0          | false    | 距离左边的间隙                                  |
| rightGap              | `number`   | 0          | false    | 距离右边的间隙                                  |

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
