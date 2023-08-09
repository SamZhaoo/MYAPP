import { useState, useEffect } from 'react';
import Child from './child';
import Child2 from './child2';
import { Button } from 'antd';
export default function indexPage() {
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    console.log('xxx');
  }, [count]);

  return (
    <>
      <p>father组件</p>
      <h1>count:{count}</h1>
      <h1>number:{number}</h1>
      <Button type="primary" onClick={() => setNumber(number + 1)}>
        修改number
      </Button>
      <Child count={count} setCount={setCount}></Child>

      <Child2 count={count} setCount={setCount}></Child2>
    </>
  );
}
