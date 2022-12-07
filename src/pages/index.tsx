import styles from './index.less';
// import { Button } from 'antd';
// import dog1 from '../assets/images/dog1.jpg';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {/* 使用antd组件库
        <Button>sss</Button>
        <Button type="link">Link Button</Button> 
      */}
      {/* 使用页面与css使用静态资源 
        <img src={dog1} className={styles.dog1} alt="" />
        <img
          src={require('../assets/images/dog1.jpg')}
          className={styles.dog1}
          alt=""
        />
        <div className={styles.dog2}></div> 
      */}
      {/* 使用全局样式与局部样式的变量*/}
      <div className="myLink">咔咔咔咔咔咔扩扩</div>{' '}
      {/* global.less设置全局样式与全局变量 */}
      <div className={styles.a1}>test</div>
      <div className={styles.a2}>test</div>
      <div className={styles.bar_right}>
        <div className={`a3`}>test</div>
      </div>
    </div>
  );
}
