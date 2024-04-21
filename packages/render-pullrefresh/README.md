# @x.render/render-pullrefresh

<p>
<a href="https://www.npmjs.com/package/@x.render/render-pullRefresh" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-pullRefresh" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-pullRefresh" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-pullRefresh" alt="NPM Downloads" /></a>

</p>

[中文文档](./README.zh.md)

## Introduce

Container that supports custom pull-down refresh prompts

## Notice

<span style="color: red;">Due to the transform attribute in the style, the internal fixed element style will be affected </span>

## Usage

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
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
        <View>test data</View>
      </View>
    </PullRefresh>
  );
};

export default App;
```

## Property

| **Name**      | **Type**        | **Default**       | **Required** | **Description**                                              |
| ------------- | --------------- | ----------------- | ------------ | ------------------------------------------------------------ |
| style         | `CSSProperties` | -                 | false        | Custom style                                                 |
| disabled      | `boolean`       | -                 | false        | Whether to trigger pull-down refresh                         |
| renderRefresh | `function`      | -                 | false        | Customize the pull-down refresh UI that needs to be rendered |
| onRefresh     | `function`      | location.reload() | false        | Execution function after triggering pull-down refresh        |
