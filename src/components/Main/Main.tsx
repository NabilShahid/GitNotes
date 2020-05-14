import * as React from 'react';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getCurrentUserInfo } from '../../services/apis';
import { getSpecificKeysObjectFromMapping } from '../../services/common-methods';
import UserKeys from '../../constants/api-keys-mapping';
import setUserAction from '../../redux/actions/user-actions';
import { GithubUser } from '../../types/common-types';

export interface MainProps {
  setUser: Function;
}
const Main: React.SFC<MainProps> = ({ setUser }: MainProps) => {
  useEffect(() => {
    getCurrentUserInfo().then((res) => {
      if (typeof res === 'object') {
        setUser(getSpecificKeysObjectFromMapping(UserKeys, res.data));
      }
    });
  }, []);
  return <div>Hello I am Main</div>;
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUser: (userPayload: GithubUser) => {
      dispatch(setUserAction(userPayload));
    },
  };
};

export default connect(null, mapDispatchToProps)(Main);
