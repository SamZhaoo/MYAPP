import styles from './index.less';
import { Button } from 'antd';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button>sss</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}
