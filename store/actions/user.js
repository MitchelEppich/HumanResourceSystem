/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import Navigation from "./navigation";

const actionTypes = {
  VERIFY_CREDENTIALS: "VERIFY_CREDENTIALS",
  FETCH_CREDENTIALS: "FETCH_CREDENTIALS",
  RELEASE_CREDENTIALS: "RELEASE_CREDENTIALS",
  REGISTER_CREDENTIALS: "REGISTER_CREDENTIALS",
  UPDATE_USER: "UPDATE_USER",
  SET_USER_DATA: "SET_USER_DATA",
  SET_ALL_USER_DATA: "SET_ALL_USER_DATA",
  FETCH_USERS: "FETCH_USERS",
  MODIFY_USER: "MODIFY_USER",
  DELETE_USER: "DELETE_USER",
  CLEAR_USER_DATA: "CLEAR_USER_DATA"
};

const getActions = uri => {
  const objects = {
    setUserData: input => {
      let _userData = input.userData;
      _userData[input.key] = input.value;
      // console.log(_userData);
      return { type: actionTypes.SET_USER_DATA, input: _userData };
    },
    clearUserData: () => {
      return { type: actionTypes.CLEAR_USER_DATA };
    },
    setAllUserData: input => {
      let _focusUser = input.focusUser;
      // console.log("HELLO", _focusUser);
      let _userData = {
        ..._focusUser
      };
      return { type: actionTypes.SET_ALL_USER_DATA, input: _userData };
    },
    releaseCredentials: input => {
      return dispatch => {
        sessionStorage.setItem("token", "");
        dispatch(
          objects.updateUser({
            username: input.username,
            online: false,
            update: false
          })
        );
        dispatch({ type: actionTypes.RELEASE_CREDENTIALS });
      };
    },
    fetchCredentials: () => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const token = sessionStorage.getItem("token");
        const operation = {
          query: query.getCredentials,
          variables: { token: token }
        };
        return makePromise(execute(link, operation))
          .then(data => {
            let user = data.data.user;
            if (user == null) return;
            sessionStorage.setItem("token", user.token);
            dispatch({ type: actionTypes.FETCH_CREDENTIALS, user: user });
            return Promise.resolve(user);
          })
          .catch(error => console.log(error));
      };
    },
    verifyCredentials: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.verifyCredentials,
          variables: {
            name: input.name,
            username: input.username,
            badge: input.badge
          }
        };
        return makePromise(execute(link, operation)).then(data => {
          let user = data.data.verifyCredentials;
          if (user == null) return;
          sessionStorage.setItem("token", user.token);
          dispatch({ type: actionTypes.VERIFY_CREDENTIALS, user: user });
          return Promise.resolve(user);
        });
      };
    },
    fetchUsers: () => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = { query: query.getUsers };

        return makePromise(execute(link, operation))
          .then(data => {
            let users = data.data.allUsers;
            // console.log(users);
            dispatch({ type: actionTypes.FETCH_USERS, users: users });
            return Promise.resolve(users);
          })
          .catch(error => console.log(error));
      };
    },
    registerCredentials: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.registerCredentials,
          variables: { ...input }
        };

        return makePromise(execute(link, operation)).then(data => {
          let user = data.data.registerCredentials;
          dispatch({ type: actionTypes.REGISTER_CREDENTIALS, user: user });
          return Promise.resolve(user);
        });
      };
    },
    deleteUser: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: mutation.deleteUser,
          variables: { username: input.username }
        };

        makePromise(execute(link, operation))
          .then(data => {
            let _promptUsers = input.promptUsers.filter(a => {
              if (a.username == input.username) return false;
              return true;
            });

            dispatch({ type: actionTypes.DELETE_USER, input: _promptUsers });
          })
          .catch(error => console.log(error));
      };
    },
    updateUser: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.updateUser,
          variables: { ...input }
        };
        return makePromise(execute(link, operation)).then(data => {
          let user = data.data.updateUser;
          dispatch({
            type: actionTypes.UPDATE_USER,
            user: input.update ? user : undefined
          });
          return Promise.resolve(user);
        });
      };
    },
    modifyUser: input => {
      return dispatch => {
        let _promptUsers = input.promptUsers;
        let _user = input.user;
        let _focusUser = input.focusUser;
        console.log("modify", _user);
        if (
          _focusUser != null &&
          _user != null &&
          _user.username == _focusUser.username
        ) {
          let NavActions = Navigation(uri);
          dispatch(NavActions.setFocusUser({ user: _user }));
        }

        let _index = 0;
        for (let _u of _promptUsers) {
          if (_u.username == _user.username) {
            _promptUsers[_index] = _user;
            break;
          }
          _index++;
        }

        dispatch({ type: actionTypes.MODIFY_USER, input: _promptUsers });
      };
    }
  };

  return { ...objects };
};
const query = {
  getUsers: gql`
    query {
      allUsers {
        username
        badge
        name
        jobTitle
        permissions
        reportsTo
        startingDate
        endingDate
        phone
        email
        jobDescription
        adminNotes
        token
        createdAt
        online
        lastAction
      }
    }
  `,
  getCredentials: gql`
    query($token: String) {
      user(input: { token: $token }) {
        username
        badge
        name
        jobTitle
        permissions
        reportsTo
        startingDate
        endingDate
        phone
        email
        jobDescription
        adminNotes
        token
        createdAt
        online
        lastAction
      }
    }
  `
};

const mutation = {
  verifyCredentials: gql`
    mutation($username: String, $badge: String) {
      verifyCredentials(input: { username: $username, badge: $badge }) {
        username
        badge
        name
        jobTitle
        permissions
        reportsTo
        startingDate
        endingDate
        phone
        email
        jobDescription
        adminNotes
        token
        createdAt
        online
        lastAction
      }
    }
  `,
  registerCredentials: gql`
    mutation(
      $name: String
      $reportsTo: String
      $jobTitle: [String]
      $startingDate: String
      $endingDate: String
      $phone: String
      $email: String
      $jobDescription: String
      $adminNotes: [String]
    ) {
      registerCredentials(
        input: {
          name: $name
          reportsTo: $reportsTo
          jobTitle: $jobTitle
          startingDate: $startingDate
          endingDate: $endingDate
          phone: $phone
          email: $email
          jobDescription: $jobDescription
          adminNotes: $adminNotes
        }
      ) {
        username
        badge
        name
        jobTitle
        permissions
        reportsTo
        startingDate
        endingDate
        phone
        email
        jobDescription
        adminNotes
        token
        createdAt
        online
        lastAction
      }
    }
  `,
  deleteUser: gql`
    mutation($username: String) {
      deleteUser(input: { username: $username }) {
        username
      }
    }
  `,
  updateUser: gql`
    mutation(
      $username: String
      $name: String
      $reportsTo: String
      $jobTitle: [String]
      $startingDate: String
      $endingDate: String
      $phone: String
      $email: String
      $jobDescription: String
      $adminNotes: [String]
      $permissions: [String]
      $online: Boolean
      $lastAction: String
    ) {
      updateUser(
        input: {
          username: $username
          name: $name
          reportsTo: $reportsTo
          jobTitle: $jobTitle
          startingDate: $startingDate
          endingDate: $endingDate
          phone: $phone
          email: $email
          jobDescription: $jobDescription
          adminNotes: $adminNotes
          permissions: $permissions
          online: $online
          lastAction: $lastAction
        }
      ) {
        username
        badge
        name
        jobTitle
        permissions
        reportsTo
        startingDate
        endingDate
        phone
        email
        jobDescription
        adminNotes
        token
        createdAt
        online
        lastAction
      }
    }
  `
};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
