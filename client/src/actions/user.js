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
  const getMetaContent = (name) => {
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') == name) {
        return metas[i].getAttribute('content');
      }
    }
  };

  const fetchUrl = '/users/sign_out';
  const config = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      authenticity_token: getMetaContent('csrf-token'),
    },
  };
  return (dispatch) => {
    dispatch({ type: ActionType.CHECK_FOR_USER });
    fetch(fetchUrl, config)
      .then((response) => {
        alert(response);
        console.log(response);
        return response.json();
      })
      .then((json) => {
        alert(json);
        console.log(json);
        return json;
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };
}

export { getUser, logOutUser };
