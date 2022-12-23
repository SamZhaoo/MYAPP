import Menu from '../../component/menus';
import styles from './index.less';
export default function asideLayout(props) {
  return (
    <div className={styles.wrap}>
      <div>
        <Menu></Menu>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}
