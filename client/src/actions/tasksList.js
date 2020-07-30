import * as ActionType from './actionsType';

function getTasksSuccess(json) {
  return {
    type: ActionType.GET_TASKS_SUCCESS,
    payload: json,
  };
}

function getTasksFail() {
  return {
    type: ActionType.GET_TASKS_FAILD,
    payload: {},
  };
}

function getTask() {
  const fetchUrl = '/api/tasks.json';
  return (dispatch) => {
    dispatch({ type: ActionType.SEARCH_OPEN_TASKS });
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((json) => dispatch(getTasksSuccess(json)))
      // eslint-disable-next-line no-console
      .catch(() => dispatch(getTasksFail()));
  };
}

export default getTask;
