import { combineReducers } from 'redux';

import UserReducer from './user';
import LocationReducer from './location';

export default combineReducers({
  user: UserReducer,
  location: LocationReducer,
});
