import * as ActionType from './actionsType';

function userLoggedIn(json) {
  return {
    type: ActionType.USER_LOGGED_IN,
    payload: json,
  };
}

function userLoggedOut() {
  return {
    type: ActionType.USER_LOGGED_OUT,
    payload: { login: false },
  };
}

function getUser() {
  const fetchUrl = '/api.json';
  return (dispatch) => {
    dispatch({ type: ActionType.CHECK_FOR_USER });
    fetch(fetchUrl)
      .then((response) => {
        if (response.status === 401) {
          return dispatch(userLoggedOut());
        }
        return response.json();
      })
      .then((json) => {
        if (json.login) {
          return dispatch(userLoggedIn(json));
        }
        return dispatch(userLoggedOut());
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };
}

function logOutUser() {
  const fetchUrl = '/users/sign_out';
  const config = {
    method: 'DELETE',
    mode: 'cors',
  };
  return (dispatch) => {
    dispatch({ type: ActionType.CHECK_FOR_USER });
    fetch(fetchUrl, config)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };
}

export { getUser, logOutUser };
