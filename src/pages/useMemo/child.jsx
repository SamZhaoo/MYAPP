import { useMemo } from 'react';
const Child = ({}) => {
  const getSon = useMemo(() => {
    console.log('childComponent');
    return 'getSon';
  }, []);
  return (
    <>
      <div>{getSon}</div>
      <div>child.page</div>
    </>
  );
};

export default Child;
