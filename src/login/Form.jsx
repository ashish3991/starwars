import { Icon } from '../images';
//git sdadad
const Form = () => {
  return (
    <div className='form-control'>
      <div>
        <img className='login-icon' src={Icon} alt='' />
      </div>
      <div className='input-control'>
        <input className='inputField' type='text' placeholder='Username *' />
        <input
          className='inputField'
          type='password'
          placeholder='Password *'
        />
        <div className='button-wrapper'>
          <button className='login-button'>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
