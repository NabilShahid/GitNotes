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
import { REDIRECT_URL } from './constants/github-app-info';

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
              <a href={REDIRECT_URL}>Login</a>
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
