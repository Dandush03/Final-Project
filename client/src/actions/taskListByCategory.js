import * as ActionTypes from './actionsType';

function geDataSuccess(json) {
  return {
    type: ActionTypes.GET_TASK_BY_SUCCESS,
    payload: json,
  };
}

function geDataFail() {
  return {
    type: ActionTypes.GET_TASK_BY_FAIL,
    payload: {
      working: [], cleaning: [], sleeping: [], studying: [],
    },
  };
}

// eslint-disable-next-line camelcase
const fetchFuntion = (start, category_id) => {
  const task = {
    start,
    category_id,
  };
  const url = new URL(`${window.location.origin}/api/searcher/by_category_date`);
  url.search = new URLSearchParams(task);
  url.method = 'GET';
  url.mode = 'cors';
  url.cache = 'no-cache';
  url.credentials = 'same-origin';

  return url;
};

function loadProgressData(date) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.GET_TASK_BY });
    Promise.all([
      fetch(fetchFuntion(date, '1')),
      fetch(fetchFuntion(date, '2')),
      fetch(fetchFuntion(date, '3')),
      fetch(fetchFuntion(date, '4')),
    ])
      .then(async ([w, s, e, sl]) => {
        const working = await w.json();
        const studing = await s.json();
        const eating = await e.json();
        const sleeping = await sl.json();
        return [working, studing, eating, sleeping];
      })
      .then(async ([w, s, e, sl]) => {
        const working = await w;
        const studing = await s;
        const eating = await e;
        const sleeping = await sl;
        return dispatch(geDataSuccess({
          working, studing, eating, sleeping,
        }));
      })
      // eslint-disable-next-line no-console
      .catch(() => dispatch(geDataFail()));
  };
}

export default loadProgressData;
