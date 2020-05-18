import * as React from 'react';
import { useEffect } from 'react';
import { getCurrentUserInfo } from '../../services/apis';
import { getSpecificKeysObjectFromMapping } from '../../services/common-methods';
import UserKeys from '../../constants/api-keys-mapping';
import PublicGists from '../PublicGists/PublicGists';

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
  return <PublicGists />;
};
export default Main;
