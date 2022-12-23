import Nav from '../../component/nav';
export default function BaseLayout(props) {
  return (
    <>
      <Nav></Nav>
      {props.children}
    </>
  );
}
