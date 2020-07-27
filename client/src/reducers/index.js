import { combineReducers } from 'redux';

import UserReducer from './users';
import LocationReducer from './location';
import TaskReducer from './task';
import TaskListsReducer from './tasksList';

export default combineReducers({
  user: UserReducer,
  location: LocationReducer,
  task: TaskReducer,
  taskList: TaskListsReducer,
});
