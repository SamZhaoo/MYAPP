import { memo } from 'react';
const child = () => {
  const getNumber = () => {
    console.log('childComponent');
  };
  return (
    <>
      <h1>child.page</h1>
      <div>{getNumber()}</div>
    </>
  );
};

export default memo(child);
