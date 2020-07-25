import { combineReducers } from 'redux';

import UserReducer from './users';
import LocationReducer from './location';
import TaskReducer from './task';

export default combineReducers({
  user: UserReducer,
  location: LocationReducer,
  task: TaskReducer,
});
