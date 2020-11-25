import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import Form from './Form';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { login } from '../redux/actionCreator';
import Spinner from '../spinner/Spinner';
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      {data.isLoading ? (
        <Spinner />
      ) : (
        <div className='login-wrapper'>
          <div>
            <Form
              userName={name}
              password={password}
              setUserName={setName}
              setPassword={setPassword}
              onSubmit={() => {
                dispatch(login({ user: name, password: password })).then(
                  (result) => {
                    setTimeout(() => {
                      history.push('/Home');
                    }, 5000);
                  }
                );
              }}
              error={data.session.isError}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
