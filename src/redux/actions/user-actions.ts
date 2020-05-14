import { GithubUser } from '../../types/common-types';

export default function setUser(user: GithubUser) {
  return {
    type: 'INSERT_GOALS',
    payload: user,
  };
}
