import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const location = window.location.origin.toString();

const initState = {
  user: { login: true, name: '' },
  location,
  task: { active: false, current: {}, taskPop: false },
  taskList: [{}],
  taskByCategory: {
    working: [], cleaning: [], sleeping: [], studying: [],
  },
  timer: { time: null, category: null },
};

export default function configureStore() {
  const store = createStore(
    reducers,
    initState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      ),
    ),
  );
  return store;
}
