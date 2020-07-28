import { combineReducers } from 'redux';

import UserReducer from './users';
import LocationReducer from './location';
import TaskReducer from './task';
import TaskListsReducer from './tasksList';
import TaskByCategories from './taskByCategories';
import Timer from './timer';

export default combineReducers({
  user: UserReducer,
  location: LocationReducer,
  task: TaskReducer,
  taskList: TaskListsReducer,
  taskByCategory: TaskByCategories,
  timer: Timer,
});
