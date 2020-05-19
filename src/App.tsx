import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import OAuthRedirect from './components/Redirect/Redirect';
import ROUTES from './constants/routes';
import Header from './components/Header/Header';
import history from './services/history';
import GistPage from './components/GistPage/GistPage';
import { GithubUser } from './types/common-types';
import setUserAction from './redux/actions/user-actions';
import PublicGists from './components/PublicGists/PublicGists';
import { getCurrentUserInfo } from './services/apis';
import { getSpecificKeysObjectFromMapping } from './services/common-methods';
import UserKeys from './constants/api-keys-mapping';
import ProfilePage from './components/ProfilePage/ProfilePage';

export interface AppProps {
  setUser: Function;
}

function App({ setUser }: AppProps) {
  useEffect(() => {
    getCurrentUserInfo().then((res) => {
      if (typeof res === 'object') {
        setUser(getSpecificKeysObjectFromMapping(UserKeys, res.data));
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <div className="App-content-container">
          <Switch>
            <Route path={ROUTES.Redirect}>
              <OAuthRedirect />
            </Route>
            <Route path={ROUTES.Gist}>
              <GistPage />
            </Route>
            <Route path={ROUTES.Profile}>
              <ProfilePage />
            </Route>
            <Route path={ROUTES.Home}>
              <PublicGists />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUser: (userPayload: GithubUser) => {
      dispatch(setUserAction(userPayload));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
