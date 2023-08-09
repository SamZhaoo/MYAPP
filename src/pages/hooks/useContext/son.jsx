import { useContext } from 'react';
import CountContext from './useContext';
import { Button } from 'antd';

const Child = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <p>son组件:count为{count}</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        修改count
      </Button>
    </>
  );
};

export default Child;
