import { createStore, combineReducers } from 'redux';
import { ReduxAction } from '../types/common-types';
import userReducer from './reducers/user-reducer';

const appReducer = combineReducers({
  userReducer,
});
/**
 * root reducer to empty all reducer states
 */
const rootReducer = (state:any, action:ReduxAction) => {
  if (action.type === 'FLUSH_STORE') state = undefined;

  return appReducer(state, action);
};
export default createStore(
  rootReducer,
);
