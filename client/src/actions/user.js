import * as ActionType from './actionsType';

function userLoggedIn(json) {
  console.log(json)
  return {
    type: ActionType.USER_LOGGED_IN,
    payload: json,
  };
}

function userLoggedOut(json) {
  return {
    type: ActionType.USER_LOGGED_OUT,
    payload: json,
  };
}

function getUser() {
  const fetchUrl = '/api'
  return  dispatch => {
    dispatch({ type: ActionType.CHECK_FOR_USER});
    fetch(fetchUrl)
    .then(response => response.json())
    .then((json) => {
        console.log(json);
        if (json.login) {
          return dispatch(userLoggedIn(json));
        }
        return dispatch(userLoggedOut(json));
      })
      .catch(error => console.log(error));
  };
}

export default getUser;