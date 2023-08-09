import { Button } from 'antd';

const Child = ({ count, setCount }) => {
  return (
    <>
      <p>child2组件:count为{count}</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        修改count
      </Button>
    </>
  );
};

export default Child;
