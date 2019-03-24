import { ACTION_GETUSERLIST } from '../actions/actionType';

const users = (state = {}, action) => {
  switch (action.type) {
    case ACTION_GETUSERLIST:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

export default users