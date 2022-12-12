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
ts不识别非代码资源，引用图片路径时会报错，解决方法是新建*images.d.ts*文件并写入
```
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
```
### 样式模块化
使用全局样式直接在`global.less`中定义
```
<div className="myLink">咔咔咔咔咔咔扩扩</div>
```
使用less变量
```
.border(@topW:1px, @bottomW:2px) {
  border-top: @topW solid #000;
  border-bottom: @bottomW solid #000;
}

.a1 {
  .border();
}
.a2 {
  .border(3px, 6px);
  border-bottom: 15px solid #000; // 覆盖混合
}
```
局部样式改写全局样式,加`:global`标识
```
.bar_right {
  :global {
    .a3 {
      background-color: yellow;
    }
  }
}
```
### Hooks与函数式编写组件 
理解并使用`useState`,`useEffect`,`useContext`
**useState**是定义和修改变量，**useEffect**监听变量的变化，**useContext**作为父子组件的通信