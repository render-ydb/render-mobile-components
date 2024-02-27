# @x.render/render-video

<p>
<a href="https://www.npmjs.com/package/@x.render/render-video" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-video" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-video" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-video" alt="NPM Downloads" /></a>

</p>

[中文文档](./README.zh.md)

## Introduce

video-based video playback component.

## Usage

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

## Property

| **Name**    | **Type**   | **Default** | **Required** | **Description**                                                                                                                                    |
| ----------- | ---------- | ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| src         | `string`   |             | false        | Video src                                                                                                                                          |
| controls    | `boolean`  |             | false        | Whether to display the control panel                                                                                                               |
| autoPlay    | `boolean`  |             | false        | Set video to play automatically                                                                                                                    |
| playControl | `string`   |             | false        | play or pause, controls video playback. If not set, the autoPlay attribute will be used to determine whether to play the video after it is loaded. |
| onPlayError | `function` |             | false        | Play function that is executed abnormally, valid when `playControl` is `play`                                                                      |
