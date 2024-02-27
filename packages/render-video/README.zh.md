# @x.render/render-video

<p>
<a href="https://www.npmjs.com/package/@x.render/render-video" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-video" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-video" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-video" alt="NPM Downloads" /></a>

</p>

[英文文档](./README.md)

## 介绍

基于 video 的视频播放组件。

## 使用

```bash
npm i @x.render/render-video -S
```

```jsx
import Video from " @x.render/render-video";

const App = () => {
  return <Video className="video" src="test.mp4" />;
};
export default App;
```

## 属性

| **属性**    | **类型**   | **默认值** | **必填** | **描述**                                                                                  |
| ----------- | ---------- | ---------- | -------- | ----------------------------------------------------------------------------------------- |
| src         | `string`   |            | false    | 视频地址                                                                                  |
| controls    | `boolean`  |            | false    | 是否展示 control panel                                                                    |
| autoPlay    | `boolean`  |            | false    | 设置视频自动播放                                                                          |
| playControl | `string`   |            | false    | play 或 pause，控制视频播放，如果不设置，则通过 autoPlay 属性来判定当视频加载后，是否播放 |
| onPlayError | `function` |            | false    | 播放异常执行的函数，当 `playControl`为 `play` 时有效                                      |
