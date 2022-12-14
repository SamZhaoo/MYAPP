import { memo } from 'react';
const Child = ({ updateCount }) => {
  const show = () => {
    console.log('child has refresh');
  };
  return (
    <>
      <h1>child.page</h1>
      <div>{show()}</div>
      <button
        onClick={() => {
          updateCount();
        }}
      >
        child button
      </button>
    </>
  );
};

export default memo(Child);
