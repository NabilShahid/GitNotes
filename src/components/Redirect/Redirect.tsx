import * as React from 'react';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { authenticateUser, getCurrentUserInfo } from '../../services/apis';
import { CLIENT_ID } from '../../constants/github-app-info';
import { saveToken } from '../../services/local-storage';
import setUser from '../../redux/actions/user-actions';
import { GithubUser } from '../../types/common-types';

const validateSession = async (): Promise<string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code') || '';
  const result = await authenticateUser(CLIENT_ID, code);
  return result.data;
};

const OAuthRedirect: React.SFC = () => {
  useEffect(() => {
    validateSession().then(async (result: string) => {
      saveToken(result);
      const res = await getCurrentUserInfo();
      console.log(res);
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
      dispatch(setUser(userPayload));
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
