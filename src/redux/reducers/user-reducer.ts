import { ReduxAction, UserState } from '../../types/common-types';

const userReducer = (
  state = {
    User: { Email: '', Name: '' },
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
