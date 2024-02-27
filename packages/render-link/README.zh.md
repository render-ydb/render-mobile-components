# @x.render/render-link

<p>
<a href="https://www.npmjs.com/package/@x.render/render-link" target="__blank"><img src="https://img.shields.io/npm/v/@x.render/render-link" alt="NPM version" /></a>

<a href="https://www.npmjs.com/package/@x.render/render-link" target="__blank"><img src="https://img.shields.io/npm/dm/%40x.render%2Frender-link" alt="NPM Downloads" /></a>

</p>

[英文文档](./README.md)

## 描述

Link 是基础的链接组件，功能同 a 标签。

## 安装

```bash
$ npm install @x.render/render-link --save
```

## 属性

| **属性** | **类型**   | **默认值** | **必填** | **描述**           |
| -------- | ---------- | ---------- | -------- | ------------------ |
| onClick  | `function` | -          | false    | 节点被点击之后触发 |
| href     | `string`   | -          | true     | 跳转目标地址       |

## 使用

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
