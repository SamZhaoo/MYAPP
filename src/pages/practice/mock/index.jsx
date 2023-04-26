import { useEffect } from 'react';
import {
  queryCard,
  addCard,
  createCard,
  getListApi,
  postListApi,
} from '@/services/index';
import { Button } from 'antd';
import styles from './index.less';

const index = () => {
  useEffect(() => {
    queryCard().then((res) => {
      console.log('queryCard:', res);
    });
  }, []);
  const add = () => {
    addCard({ name: 111 }).then((res) => {
      console.log('addCard:', res);
    });
  };
  const create = () => {
    createCard({ name: 111 }).then((res) => {
      console.log('createCard:', res);
    });
  };
  const postList = () => {
    postListApi({ name: 111 }).then((res) => {
      console.log('getList:', res);
    });
  };
  const getList = () => {
    getListApi({ name: 111 }).then((res) => {
      console.log('getList:', res);
    });
  };
  return (
    <>
      <div className={styles.panel}>
        <Button className={styles.btn} type="primary" onClick={() => add()}>
          发送add
        </Button>
        <Button className={styles.btn} type="primary" onClick={() => create()}>
          发送create
        </Button>
        <Button
          className={styles.btn}
          type="primary"
          onClick={() => postList()}
        >
          发送postList
        </Button>
        <Button className={styles.btn} type="primary" onClick={() => getList()}>
          发送getList
        </Button>
      </div>
    </>
  );
};

export default index;
