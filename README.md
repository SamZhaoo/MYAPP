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

**useState**定义和修改变量； 

**useEffect**监听变量的变化，如果useState的变量改变后，执行useEffect的依赖钩子； 

**useContext**作为父子组件的通信，声明`createContext`react组件，在父组件中将传递的值与方法绑定在`createContext`组件`value`属性上，子组件用`useContext`解构赋值即可完成通信 

**useMemo**性能优化，避免每次渲染都进行计算，仅会在某个依赖项改变时才重新计算值,类似vue的computed 

**memo** react高阶组件，与useMemo类似，解决只要父组件的状态更新，无论有没有对自组件进行操作，子组件都会进行更新的问题。在子组件中用memo包裹之后，子组件依赖的父组件的数据发生变化，子组件才会更新 

**useCallback**性能优化，因为父组件传递的是个函数，函数是引用类型的，所以父子间更新，引用地址也改变，所以即使子组件使用了memo包裹，子组件也更新。通过useCallback进行约束，只有某个依赖改变，才会更新子组件。与useMemo的区别是useMemo的返回值是函数运行的结果，useCallback返回值是函数

**useRef**获取dom或者缓存数据，定义useRef的变量，之后将其绑定在dom标签上，获取变量current属性就能得到该dom以及dom上面的属性；对useRef的变量进行修改，组件不会重新渲染，因此可以缓存数据上一次的值
### 配置型路由
路由中path就代表vue中路由的name与path结合体，子路由的path要涵盖上级路由path
组件的props.children代表vue中的router-view，即子路由的展示部分
路由的wrappers属性适用于权限鉴权，在这个js文件中进行权限逻辑的判断，该属性是个数组，即可进行组合鉴权
### 路由跳转参数
- 编程式跳转
  1. import { history } from 'umi'
  2. const 组件的上线文({history})=>{}
  3. import { useHistory } from 'umi'
- 声明式跳转
  1. import {NavLink} from 'umi'
  2. import {Link} from 'umi'
- 接收参数
  1. const 组件上线文解析
  ```
    export default function GoodsDetail({
      location: { search },
      match: {
        params: { id }
      }
    }){
      // xxxxxxx
    }
  ```
  如果上下文丢失，可用withRouter包装组件，history, location, match便会在props中
  2. hooks获取
  ```
  import { useLocation, useParams, useRouteMatch }
  ```
### 使用UMI的mock功能与mockjs
在**mock**目录下创建js文件，生成请求对象
可以使用mockjs有特定语法更方便生成mock数据