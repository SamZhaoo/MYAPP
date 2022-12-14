import { useState, useEffect, useRef } from 'react';
function UseRef() {
  const myDiv = useRef();
  const getDom = () => {
    console.log(myDiv);
    console.log(myDiv.current.getAttribute('sss-ddd'));
  };

  const [count, setCount] = useState(0);
  const lastCount = useRef(count);

  useEffect(() => {
    lastCount.current = count;
  }, [count]);

  return (
    <>
      <h1>index.page</h1>
      <div sss-ddd="my name is xx" ref={myDiv}></div>
      <button
        onClick={() => {
          getDom();
        }}
      >
        获取dom
      </button>
      <p>当前count：{count}</p>
      <p>之前count：{lastCount.current}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        改变count
      </button>
    </>
  );
}

export default UseRef;
