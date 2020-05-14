import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import OAuthRedirect from './components/Redirect/Redirect';
import ROUTES from './constants/routes';
import Header from './components/Header/Header';
import history from './services/history';

function App() {
  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <div>
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
