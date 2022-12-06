import styles from './index.less';
import { Button } from 'antd';
import dog1 from '../assets/images/dog1.jpg';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button>sss</Button>
      <Button type="link">Link Button</Button>
      <img src={dog1} className={styles.dog1} alt="" />
      <img
        src={require('../assets/images/dog1.jpg')}
        className={styles.dog1}
        alt=""
      />
      <div className={styles.dog2}></div>
    </div>
  );
}
