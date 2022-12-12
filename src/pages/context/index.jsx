import { useState, useEffect } from 'react';
import Child from './child';
import CountContext from './useContext';
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
      <CountContext.Provider value={{ count, setCount }}>
        <Child></Child>
      </CountContext.Provider>
    </>
  );
}
