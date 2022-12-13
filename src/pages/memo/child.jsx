import { memo } from 'react';
const child = ({ count }) => {
  const getNumber = () => {
    console.log('xxx');
  };
  return (
    <>
      <h1>child.page</h1>
      <div>{getNumber()}</div>
      <div>{count}</div>
    </>
  );
};

export default memo(child);
