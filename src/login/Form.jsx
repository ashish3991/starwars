import { Icon } from '../images';

const Form = (props) => {
  return (
    <div className='form-control'>
      <div>
        <img className='login-icon' src={Icon} alt='' />
      </div>
      <div className='input-control'>
        <input
          className='inputField'
          type='text'
          placeholder='Username *'
          value={props.userName}
          onChange={(e) => props.setUserName(e.target.value)}
        />
        <input
          className='inputField'
          type='password'
          placeholder='Password *'
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
        />
        {props.error && (
          <div style={{ color: 'red', paddingTop: 15, fontWeight: 'bold' }}>
            {'Error: Invalid username or password'}
          </div>
        )}
        <div className='button-wrapper'>
          <button
            className='login-button'
            onClick={() => props.onSubmit()}
            disabled={props.userName === '' || props.password === ''}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
