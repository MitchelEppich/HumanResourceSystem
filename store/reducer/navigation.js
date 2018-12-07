import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  complaint: {},
  promptComplaints: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMPLAINT:
      return updateObject(state, { complaint: action.input });
    case actionTypes.FETCH_COMPLAINTS:
      return updateObject(state, { promptComplaints: action.input });
    default:
      return state;
  }
};
