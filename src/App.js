import './App.css';
import Login from './login/Login';
import Home from './home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/'} component={Login} />
          <Route exact path={'/Home'} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
