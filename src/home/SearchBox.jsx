import './SearchBox.css';

const SearchBox = (props) => {
  return (
    <div className='coverWrapper'>
      <div id='cover'>
        <div className='tb'>
          <div className='td'>
            <input
              type='text'
              placeholder='Search'
              value={props.value}
              onChange={props.onChange}
              required
              spellCheck={false}
            />
          </div>
          <div className='td' id='s-cover'>
            <button type='submit'>
              <div id='s-circle' />
              <span></span>
            </button>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default SearchBox;
