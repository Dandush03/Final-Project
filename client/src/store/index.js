// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const location = window.location.toString();

const initState = {
  user: { login: true, name: '' },
  location,
  task: { active: false, current: {}, taskPop: false },
  taskList: [{}],
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
