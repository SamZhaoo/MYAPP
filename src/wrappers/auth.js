import { Redirect } from 'umi';

export default (props) => {
  const num = Math.random();
  console.log('num:', num);
  if (num > 0.5) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/404"></Redirect>;
  }
};
