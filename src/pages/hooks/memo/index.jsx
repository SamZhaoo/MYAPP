import { useState } from 'react';
import Child from './child';
const indexPage = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  return (
    <>
      <h1>index.page</h1>
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
      <Child count={count}></Child>
    </>
  );
};
export default indexPage;
