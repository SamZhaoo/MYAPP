import { useState, useMemo } from 'react';
export default function indexPage() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const getNumberMemo = useMemo(() => {
    console.log('xxx');
    return count * 2;
  }, [count]);

  // const getNumberMemo = () => {
  //   console.log(111); // 每次都會執行
  //   return count * 2;
  // };

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
