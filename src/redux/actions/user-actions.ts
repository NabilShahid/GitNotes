import { GithubUser } from '../../types/common-types';

export default function setUserAction(user: GithubUser) {
  return {
    type: 'SET_USER',
    payload: user,
  };
}
