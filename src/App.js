import './App.css';
import Login from './login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/'} component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
