import { ReduxAction } from '../../types/common-types';
import { UserState } from '../../types/states';

const userReducer = (
  state = {
    User: { AvatarUrl: '', Login: '' },
  },
  action: ReduxAction,
) => {
  let newState: UserState;

  switch (action.type) {
    case 'SET_USER':
      newState = { ...state };
      newState.User = action.payload;
      state = newState;
      break;
    default: {
      break;
    }
  }
  return state;
};

export default userReducer;
