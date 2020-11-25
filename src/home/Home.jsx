import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Sword } from '../images/index';
import './Home.css';
import SearchBox from './SearchBox';
import { getPlanets } from '../redux/actionCreator';
import Spinner from '../spinner/Spinner';

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

const Compare = (a, b, key) => {
  if (a[key] === 'unknown') {
    a[key] = 0;
  }

  if (b[key] === 'unknown') {
    b[key] = 0;
  }

  if (key) {
    if (parseInt(a[key], 10) > parseInt(b[key], 10)) {
      return -1;
    }
    if (parseInt(a[key], 10) <= parseInt(b[key], 10)) {
      return 1;
    }
  }
};

const Results = ({ planets }) => {
  let height = 90;
  return (
    <div className='planets-result'>
      {planets
        .sort((a, b) => Compare(a, b, 'population'))
        .map((item, index) => {
          if (item.population !== 0) {
            return (
              <div
                key={index}
                className={'planet-name ' + index}
                style={{
                  height: height - 2 * index,
                }}
              >
                <span>{item.name}</span>
                <span style={{ right: 30, position: 'absolute' }}>
                  {item.population}
                </span>
              </div>
            );
          }
        })}
    </div>
  );
};

const Home = () => {
  let history = useHistory();
  const { session, planets, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searcText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    dispatch(getPlanets());
    if (!session.created) history.push('/login');
  }, []);

  const search = (key) => {
    const searchedData = planets.filter((planet) =>
      planet.name.toLowerCase().includes(key.toLowerCase())
    );
    setSearchResults(searchedData);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='home-wrapper'>
          <div className='welcome'> ~ Welcome: {session.name} ~</div>
          <div className='home'>
            <SwordComponent />
            <SearchBox
              value={searcText}
              onChange={(e) => {
                let val = e.target.value;
                setSearchText(val);
                if (val !== '') search(val);
                else setSearchResults([]);
              }}
            >
              {searchResults.length > 0 && <Results planets={searchResults} />}
            </SearchBox>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
