# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## Learning Note
### 模板约定
在路径pages下面添加名为*document.ejs*的模板文件，这是UMI框架的约定式；  
在config.js中添加mountElementId: 'app', // 指定react app渲染到HTML元素的id
### 引用AntD
import { Button } from 'antd';  
<Button>sss</Button>  
### 修改主题和公共样式
config目录下创建*theme.ts*
```
export default {
  '@primary-color': 'green',
};
```
config.js文件引用
```
import theme from './theme'
defineConfig({
  ...,
  theme
})
```



