import { useDispatch, useSelector, shallowEqual } from 'react-redux';
const Home = () => {
  const name = useSelector((state) => state.session.name);
  return <div>Welcome: {name}</div>;
};
export default Home;
