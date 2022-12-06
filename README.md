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
```
import { Button } from 'antd';  
<Button>sss</Button>  
```
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
### 图片与静态资源
```
import dog1 from '../assets/images/dog1.jpg'

<img src={dog1} className={styles.dog1} alt="" />
<img src={require('../assets/images/dog1.jpg')} className={styles.dog1} alt="" />
```
样式中对图片的使用
```
background: url('../assets/images/dog2.jpg');
background: url('~@/assets/images/dog2.jpg');
```



