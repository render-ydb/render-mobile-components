# render-link

## 描述

Link 是基础的链接组件，同 a 标签。

## 安装

```bash
$ npm install render-link --save
```

## 属性

| **属性** | **类型**   | **默认值** | **必填** | **描述**           |
| -------- | ---------- | ---------- | -------- | ------------------ |
| onClick  | `function` | -          | false    | 节点被点击之后触发 |
| href     | `string`   | -          | true     | 跳转目标地址       |

## 示例

```jsx
import Link from "render-link";
import Text from "render-text";
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
