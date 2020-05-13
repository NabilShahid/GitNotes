import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import OAuthRedirect from './components/Redirect/Redirect';
import ROUTES from './constants/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to={ROUTES.Home}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.Redirect}>Login</Link>
            </li>
          </ul>

          <Switch>
            <Route path={ROUTES.Redirect}>
              <OAuthRedirect />
            </Route>
            <Route path={ROUTES.Home}>
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
