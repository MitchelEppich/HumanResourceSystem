/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

import userReducer from "./user";
import navReducer from "./navigation";

const initialState = {
  visibleScreen: [] // When null show main screen
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_SCREEN:
      return updateObject(state, {
        visibleScreen: action.input
      });

    default:
      return state;
  }
};

// export default indexReducer;
export default combineReducers({
  misc: indexReducer,
  user: userReducer,
  nav: navReducer
});
