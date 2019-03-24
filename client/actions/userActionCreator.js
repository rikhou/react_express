import { ACTION_GETUSERLIST } from '../actions/actionType';

export const getUsers = () => {
  return (dispatch) => {
    fetch('/listUsers').then(response => response.json()).then(data => {
      dispatch({ type: ACTION_GETUSERLIST, payload: data })
    });
  }
};