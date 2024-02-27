# @x.render/render-picture

<p>
<a href="https://www.npmjs.com/package/@x.render/render-picture" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-picture" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-picture" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-picture" alt="NPM Downloads" /></a>

</p>

[中文文档](./README.zh.md)

## Introduce

The image display component implemented by the img element adds lazy loading and default bottom-up image display functions compared to the img element.

## Usage

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

## Property

| **Name**    | **Type**  | **Default** | **Required** | **description**                                                                  |
| ----------- | --------- | ----------- | ------------ | -------------------------------------------------------------------------------- |
| src         | `string`  | -           | true         | The address of the picture resource                                              |
| placeholder | `string`  | -           | false        | Image resource placeholder                                                       |
| lazyload    | `boolean` | false       | false        | Whether to enable lazy loading (when the img element is visible, load the image) |
