import { memo } from 'react';
import { Button } from 'antd';

const Child = ({ count, setCount }) => {
  console.log('count:', count);
  return (
    <>
      <p>child1组件:count为{count}</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        修改count
      </Button>
    </>
  );
};

export default memo(Child);
