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
    case actionTypes.CLEAR_USER_DATA:
      return updateObject(state, { userData: {} });
    case actionTypes.SET_USER_DATA:
      return updateObject(state, { userData: action.input });
    case actionTypes.SET_ALL_USER_DATA:
      return updateObject(state, { userData: action.input });
    case actionTypes.VERIFY_CREDENTIALS:
      return updateObject(state, { currentUser: action.user });
    case actionTypes.FETCH_CREDENTIALS:
      return updateObject(state, { currentUser: action.user });
    case actionTypes.UPDATE_USER:
      return updateObject(state, { currentUser: action.user, userData: {} });
    case actionTypes.RELEASE_CREDENTIALS:
      return updateObject(state, { currentUser: null });
    case actionTypes.REGISTER_CREDENTIALS:
      return updateObject(state, {
        registerUser: action.user,
        userData: {}
      });
    case actionTypes.FETCH_USERS:
      return updateObject(state, { promptUsers: action.users, userData: {} });
    case actionTypes.MODIFY_USER:
      return updateObject(state, {
        promptUsers: action.input,
        userData: {}
      });
    case actionTypes.DELETE_USER:
      return updateObject(state, { promptUsers: action.input });
    default:
      return state;
  }
};
