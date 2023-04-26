import { useState, useCallback } from 'react';
import Child from './child';
const indexPage = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const updateCount = useCallback(() => {
    console.log('indexPage has refresh');
  }, [count]);
  return (
    <>
      <h1>index.page</h1>
      <div>{count}</div>
      <div>{value}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Child updateCount={updateCount}></Child>
    </>
  );
};
export default indexPage;
