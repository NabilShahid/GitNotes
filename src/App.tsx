import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import OAuthRedirect from './components/Redirect/Redirect';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/redirect">Login</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/redirect">
              <OAuthRedirect />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
