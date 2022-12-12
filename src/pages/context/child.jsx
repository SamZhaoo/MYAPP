import { useContext } from 'react';
import CountContext from './useContext';
import { Button } from 'antd';

const Child = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <p>child组件</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        修改count
      </Button>
    </>
  );
};

export default Child;
