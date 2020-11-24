import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import Form from './Form';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { login } from '../redux/actionCreator';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state, shallowEqual);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (data.session.created) {
      history.push('./Home');
    }
  }, [data.session.created]);

  return (
    <div className='login-wrapper'>
      <div>
        <Form
          userName={name}
          password={password}
          setUserName={setName}
          setPassword={setPassword}
          onSubmit={async () => {
            dispatch(login({ user: name, password: password }));
          }}
          error={data.session.isError}
        />
      </div>
    </div>
  );
};
export default Login;
