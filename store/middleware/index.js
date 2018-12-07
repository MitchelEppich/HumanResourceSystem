import actions from "../actions";

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const uri = "http://localhost:3000/graphql";

const imports = [];

const middleware = [
  store => {
    return next => {
      return action => {
        const result = next(action);

        return result;
      };
    };
  }
];

const query = {};

const mutation = {
  createActionLog: gql`
    mutation($task: String, $who: String) {
      createActionLog(input: { task: $task, who: $who }) {
        _id
        who
        task
        createdAt
      }
    }
  `
};

export default [...middleware, ...imports];
