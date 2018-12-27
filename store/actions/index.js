/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import User from "./user";
import Nav from "./navigation";

const uri = "http://localhost:3000/graphql";

const imports = {
  ...User(uri),
  ...Nav(uri)
};

const actionTypes = {
  SET_VISIBLE_SCREEN: "SET_VISIBLE_SCREEN",
  SEND_ACTION_EMAIL: "SEND_ACTION_EMAIL"
};

const actions = {
  setVisibleScreen: input => {
    return {
      type: actionTypes.SET_VISIBLE_SCREEN,
      input: input
    };
  },
  sendActionEmail: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });

      const operation = {
        query: mutation.sendActionEmail,
        variables: { ...input }
      };

      return makePromise(execute(link, operation))
        .then(data => {
          dispatch({
            type: actionTypes.SEND_ACTION_EMAIL
          });
        })
        .catch(error => console.log(error));
    };
  }
};

const query = {};

const mutation = {
  sendActionEmail: gql`
    mutation(
      $email: String
      $body: String
      $status: String
      $date: String
      $type: String
      $name: String
    ) {
      sendEmail(
        input: {
          email: $email
          body: $body
          status: $status
          date: $date
          type: $type
          name: $name
        }
      )
    }
  `
};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
