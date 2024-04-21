# @x.render/render-pullrefresh

<p>
<a href="https://www.npmjs.com/package/@x.render/render-pullRefresh" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-pullRefresh" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-pullRefresh" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-pullRefresh" alt="NPM Downloads" /></a>

</p>

[英文文档](./README.md)

## 描述

支持自定义下拉刷新提示的容器

## 注意

<span style="color: red;">由于样式中带有 transform 属性，内部 fixed 元素样式会受到影响</span>

## 使用

```bash
$ npm install @x.render/render-pullrefresh --save
```

```jsx
import PullRefresh from "@x.render/render-pullrefresh";
import View from "@x.render/render-view";
const App = () => {
  return (
    <PullRefresh
      disabled
      onRefresh={() => {
        console.log("刷新");
      }}
      renderRefresh={() => {
        return <View>释放立即刷新</View>;
      }}
    >
      <View style={{ background: "red" }}>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
        <View>这是些测试数据</View>
      </View>
    </PullRefresh>
  );
};

export default App;
```

## 属性

| **属性**      | **类型**        | **默认值**        | **必填** | **描述**                    |
| ------------- | --------------- | ----------------- | -------- | --------------------------- |
| style         | `CSSProperties` | -                 | false    | 自定义样式                  |
| disabled      | `boolean`       | -                 | false    | 是否触发下拉刷新            |
| renderRefresh | `function`      | -                 | false    | 自定义需要渲染的下拉刷新 UI |
| onRefresh     | `function`      | location.reload() | false    | 触发下拉刷新后的执行函数    |
