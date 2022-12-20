import { useState, useMemo } from 'react';
export default function indexPage() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const getNumberMemo = useMemo(() => {
    console.log('xxx');
    return 111;
  }, [count]);
  return (
    <>
      <h1>index.page</h1>
      <div>count:{count}</div>
      <div>value:{value}</div>
      <div>number:{getNumberMemo}</div>
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
    </>
  );
}
