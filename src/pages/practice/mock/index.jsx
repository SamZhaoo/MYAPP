import { useEffect } from 'react';
import { queryCard, addCard, createCard } from '@/services/index';
import { Button } from 'antd';

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
  return (
    <>
      <div>
        <Button type="primary" onClick={() => add()}>
          发送add
        </Button>
        <Button type="primary" onClick={() => create()}>
          发送create
        </Button>
      </div>
    </>
  );
};

export default index;
