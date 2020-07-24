import { combineReducers } from 'redux';

import UserReducer from './users';
import LocationReducer from './location';

export default combineReducers({
  user: UserReducer,
  location: LocationReducer,
});
