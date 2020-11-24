import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Sword } from '../images/index';
import './Home.css';
const SwordComponent = () => {
  return (
    <div style={{ display: 'flex' }}>
      <img
        src={Sword}
        alt=''
        className='sword'
        style={{
          marginTop: '40%',
          bottom: 0,
          marginLeft: 10,
        }}
      />
      <img
        src={Sword}
        alt=''
        className='sword'
        style={{
          marginTop: '40%',
          bottom: 0,
          marginLeft: '80vw',
        }}
      />
    </div>
  );
};
const Home = () => {
  const name = useSelector((state) => state.session.name);
  return (
    <div className='home-wrapper'>
      <div className='welcome'> ~ Welcome: {name} ~</div>
      <div className='home'>
        <SwordComponent />
      </div>
    </div>
  );
};
export default Home;
