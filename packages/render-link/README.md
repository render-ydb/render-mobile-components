# @x.render/render-link

<p>
<a href="https://www.npmjs.com/package/@x.render/render-link" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-link" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-link" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-link" alt="NPM Downloads" /></a>

</p>

[中文文档](./README.zh.md)

## Introduce

Link is the basic link component and has the same function as the a tag.

## Property

| **Name** | **Type**   | **Default** | **Required** | **description**                     |
| -------- | ---------- | ----------- | ------------ | ----------------------------------- |
| onClick  | `function` | -           | false        | Triggered after the node is clicked |
| href     | `string`   | -           | true         | Jump target address                 |

## Usage

```bash
$ npm install @x.render/render-link --save
```

```jsx
import Link from "@x.render/render-link";
import Text from "@x.render/render-text";
const App = () => {
  return (
    <Link
      href={"//www.taobao.com"}
      onClick={(e) => {
        console.log(e);
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: "#333333",
        }}
      >
        点击跳转
      </Text>
    </Link>
  );
};
export default App;
```
