import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return action.payload;
    case types.USER_LOGGED_OUT:
      return action.payload;
      default:
        console.log(action.type);
      return state;
  }
};
