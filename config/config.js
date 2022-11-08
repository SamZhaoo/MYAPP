import { defineConfig } from 'umi';
import routes from './routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: routes,
  fastRefresh: {},// 快速刷新，保留组件状态
  // devServer: {
  //   port: 8081 //.env里的权限更高
  // },
  // title: '',
  // favicon: '',
  // dynamicImport: {
    // loading: '' // 按需加载时指定显示组件
  // } // 启用按需加载
  mountElementId: 'app' // 指定react app渲染到HTML元素的id
});
