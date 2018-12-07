/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import moment from "moment";

const actionTypes = {
  SET_COMPLAINT: "SET_COMPLAINT",
  FETCH_COMPLAINTS: "FETCH_COMPLAINTS"
};

const getActions = uri => {
  const objects = {
    setComplaint: input => {
      let _complaint = input.complaint;
      _complaint[input.key] = input.value;
      console.log(_complaint);
      return {
        type: actionTypes.SET_COMPLAINT,
        input: _complaint
      };
    },
    fetchComplaints: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = { query: query.getComplaints };

        return makePromise(execute(link, operation))
          .then(data => {
            let _complaints = data.data.allComplaints;
            dispatch({
              type: actionTypes.FETCH_COMPLAINTS,
              input: _complaints
            });
            return Promise.resolve(_complaints);
          })
          .catch(error => console.log(error));
      };
    }
  };

  return { ...objects };
};
const query = {};

const mutation = {};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
