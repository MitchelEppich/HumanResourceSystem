import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentUser: null,
  registerUser: null,
  promptUsers: null,
  userData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return updateObject(state, { userData: action.input });
    case actionTypes.VERIFY_CREDENTIALS:
      return updateObject(state, { currentUser: action.user });
    case actionTypes.FETCH_CREDENTIALS:
      return updateObject(state, { currentUser: action.user });
    case actionTypes.UPDATE_USER:
      return updateObject(state, { currentUser: action.user });
    case actionTypes.RELEASE_CREDENTIALS:
      return updateObject(state, { currentUser: null });
    case actionTypes.REGISTER_CREDENTIALS:
      return updateObject(state, { registerUser: action.user });
    case actionTypes.FETCH_USERS:
      return updateObject(state, { promptUsers: action.users });
    case actionTypes.MODIFY_USER:
      return updateObject(state, { promptUsers: action.input });
    case actionTypes.DELETE_USER:
      return updateObject(state, { promptUsers: action.input });
    default:
      return state;
  }
};
