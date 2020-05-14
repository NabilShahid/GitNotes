import * as React from 'react';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { authenticateUser } from '../../services/apis';
import { CLIENT_ID } from '../../constants/github-app-info';
import { saveToken } from '../../services/local-storage';
import setUserAction from '../../redux/actions/user-actions';
import { GithubUser } from '../../types/common-types';
import ROUTES from '../../constants/routes';
import history from '../../services/history';

const validateSession = async (): Promise<string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code') || '';
  const result = await authenticateUser(CLIENT_ID, code);
  return result.data;
};

export interface OAuthRedirectProps {
  setUser: Function;
}

const OAuthRedirect: React.SFC<OAuthRedirectProps> = () => {
  useEffect(() => {
    validateSession().then(async (result: string) => {
      saveToken(result);
      history.push(ROUTES.Home);
      //   const res = await getCurrentUserInfo();
      //   if (res) {
      //     setUser(getSpecificKeysObjectFromMapping(UserKeys, res));
      //   }
    });
  }, []);
  return (
    <div>
      Redirecting...
      {}
    </div>
  );
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUser: (userPayload: GithubUser) => {
      dispatch(setUserAction(userPayload));
    },
  };
};

// const mapStateToProps = (state) => {
//   return {
//     goals: state.goalReducer.Goals,
//     habits: state.habitReducer.Habits,
//     userEmail: state.userReducer.User.Email,
//   };
// };

export default connect(null, mapDispatchToProps)(OAuthRedirect);
