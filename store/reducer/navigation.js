import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  complaint: {},
  promptComplaints: [],
  focusComplaint: null,
  focusUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FOCUS_USER:
      return updateObject(state, { focusUser: action.input });
    case actionTypes.SET_COMPLAINT:
      return updateObject(state, { complaint: action.input });
    case actionTypes.SET_FOCUS_COMPLAINT:
      return updateObject(state, { focusComplaint: action.input });
    case actionTypes.FETCH_COMPLAINTS:
      return updateObject(state, { promptComplaints: action.input });
    case actionTypes.MODIFY_COMPLAINT:
      return updateObject(state, { promptComplaints: action.input });
    case actionTypes.DELETE_COMPLAINT:
      return updateObject(state, { promptComplaints: action.input });
    case actionTypes.POST_COMPLAINT:
      return updateObject(state, { complaint: {} });
    default:
      return state;
  }
};
