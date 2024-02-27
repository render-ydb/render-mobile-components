# render-picture

<p>
<a href="https://www.npmjs.com/package/@x.render/render-picture" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-picture" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-picture" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-picture" alt="NPM Downloads" /></a>

</p>

[中文文档](./README.zh.md)

## 描述

由 img 元素实现的图片展示组件，相对于 img 元素，增加了懒加载和默认兜底图展示功能。

## 使用

```bash
$ npm install @x.render/render-picture --save
```

```jsx
import Picture from "@x.render/render-picture";
const App = () => {
  return (
    <div>
      <div style={{ height: "130vh" }}></div>
      <Picture
        lazyload
        style={{
          width: 20,
          height: 20,
        }}
        src="https://gw.alicdn.com/imgextra/i1/O1CN01wMWLIb1Yd9CUKQLuE_!!6000000003081-0-tps-1500-1444.jpg"
        placeholder="https://gw.alicdn.com/imgextra/i2/O1CN01AbPrpW1iBniCuIeJH_!!6000000004375-2-tps-200-200.png"
      />
    </div>
  );
};

export default App;
```

## 属性

| **属性**    | **类型**  | **默认值** | **必填** | **描述**                                         |
| ----------- | --------- | ---------- | -------- | ------------------------------------------------ |
| src         | `string`  | -          | true     | 图片资源地址                                     |
| placeholder | `string`  | -          | false    | 兜底图片资源地址                                 |
| lazyload    | `boolean` | false      | false    | 是否开启懒加载（img 元素可见的时候，去加载图片） |
