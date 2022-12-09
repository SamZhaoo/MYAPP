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
      {/* 样式模块化 
        global.less设置全局样式
        <div className="myLink">咔咔咔咔咔咔扩扩</div>
        
        使用less变量
        <div className={styles.a1}>test</div>
        <div className={styles.a2}>test</div>
        局部样式设置为全局样式
        <div className={styles.bar_right}>
          <div className={`a3`}>test</div>
        </div>
      */}
    </div>
  );
}
