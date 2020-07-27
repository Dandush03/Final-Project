import * as ActionType from './actionsType';

function openPopUp() {
  return {
    type: ActionType.TASK_POP_OPEN,
  };
}

function closePopUp() {
  return {
    type: ActionType.TASK_POP_CLOSE,
  };
}

function statusTask(json) {
  let status;
  if (json) {
    status = true;
  }
  return {
    type: ActionType.STATUS_TASK,
    payload: { active: status, current: json },
  };
}

function searchTask() {
  const fetchUrl = '/api/searcher.json';
  return (dispatch) => {
    dispatch({ type: ActionType.SEARCH_OPEN_TASKS });
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((json) => dispatch(statusTask(json)))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };
}

export { searchTask, openPopUp, closePopUp };
