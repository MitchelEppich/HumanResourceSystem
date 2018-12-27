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
  FETCH_COMPLAINTS: "FETCH_COMPLAINTS",
  POST_COMPLAINT: "POST_COMPLAINT",
  SET_FOCUS_COMPLAINT: "SET_FOCUS_COMPLAINT",
  UPDATE_COMPLAINT: "UPDATE_COMPLAINT",
  MODIFY_COMPLAINT: "MODIFY_COMPLAINT",
  DELETE_COMPLAINT: "DELETE_COMPLAINT",
  SET_FOCUS_USER: "SET_FOCUS_USER"
};

const getActions = uri => {
  const objects = {
    setComplaint: input => {
      let _complaint = input.complaint;
      _complaint[input.key] = input.value;
      return {
        type: actionTypes.SET_COMPLAINT,
        input: _complaint
      };
    },
    setFocusUser: input => {
      return { type: actionTypes.SET_FOCUS_USER, input: input.user };
    },
    modifyComplaint: input => {
      return dispatch => {
        let _complaint = input.complaint;
        let _promptComplaints = input.promptComplaints;

        console.log("InPUT", _promptComplaints);

        let _focusComplaint = input.focusComplaint;
        if (_focusComplaint != null && _focusComplaint._id == _complaint._id) {
          dispatch(objects.setFocusComplaint({ complaint: _complaint }));
        }

        let _index = 0;
        _promptComplaints.map(a => {
          if (a._id == _complaint._id) {
            _promptComplaints[_index] = _complaint;
            _index = -1;
            return;
          }
          _index++;
        });

        if (_index != -1) _promptComplaints.push(_complaint);

        console.log("OUTPUT", _promptComplaints);

        dispatch({
          type: actionTypes.MODIFY_COMPLAINT,
          input: _promptComplaints
        });
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
    },
    deleteComplaint: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: mutation.deleteComplaint,
          variables: { ...input }
        };

        makePromise(execute(link, operation))
          .then(data => {
            let _promptComplaints = input.promptComplaints.filter(a => {
              if (a._id == input._id) return false;
              return true;
            });
            dispatch({
              type: actionTypes.DELETE_COMPLAINT,
              input: _promptComplaints
            });
          })
          .catch(error => console.log(error));
      };
    },
    setFocusComplaint: input => {
      return {
        type: actionTypes.SET_FOCUS_COMPLAINT,
        input: input.complaint
      };
    },
    postComplaint: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: mutation.createComplaint,
          variables: { ...input }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let _complaint = data.data.createComplaint;
            dispatch({
              type: actionTypes.POST_COMPLAINT,
              input: _complaint
            });
            return Promise.resolve(_complaint);
          })
          .catch(error => console.log(error));
      };
    },
    updateComplaint: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        let _variables = { _id: input.focusComplaint._id };
        if (input.adminComplaint != null)
          _variables = { ..._variables, ...input.adminComplaint };
        if (input.note != null)
          _variables = { ..._variables, note: input.note };

        const operation = {
          query: mutation.updateComplaint,
          variables: _variables
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let _complaint = data.data.updateComplaint;
            dispatch({
              type: actionTypes.UPDATE_COMPLAINT,
              input: _complaint
            });
            return Promise.resolve(_complaint);
          })
          .catch(error => console.log(error));
      };
    }
  };

  return { ...objects };
};
const query = {
  getComplaints: gql`
    query {
      allComplaints {
        _id
        name
        email
        status
        adminResponses
        notes
        fileDate
        closeDate
        incidentDate
        incidentTime
        incidentLocation
        incidentDescription
        additionalInfo
        proposedAction
        anonymous
        reportedNames
        witnessNames
      }
    }
  `
};

const mutation = {
  createComplaint: gql`
    mutation(
      $name: String
      $email: String
      $fileDate: String
      $incidentDate: String
      $incidentTime: String
      $incidentLocation: String
      $incidentDescription: String
      $reportedNames: [String]
      $witnessNames: [String]
      $additionalInfo: String
      $proposedAction: String
      $anonymous: Boolean
    ) {
      createComplaint(
        input: {
          name: $name
          email: $email
          fileDate: $fileDate
          incidentDate: $incidentDate
          incidentTime: $incidentTime
          incidentLocation: $incidentLocation
          incidentDescription: $incidentDescription
          reportedNames: $reportedNames
          witnessNames: $witnessNames
          additionalInfo: $additionalInfo
          proposedAction: $proposedAction
          anonymous: $anonymous
        }
      ) {
        _id
        name
        email
        status
        adminResponses
        notes
        fileDate
        incidentDate
        incidentTime
        incidentLocation
        incidentDescription
        additionalInfo
        proposedAction
        anonymous
      }
    }
  `,
  deleteComplaint: gql`
    mutation($_id: String) {
      deleteComplaint(input: { _id: $_id }) {
        _id
      }
    }
  `,
  updateComplaint: gql`
    mutation(
      $status: String
      $adminResponse: String
      $note: String
      $_id: String
    ) {
      updateComplaint(
        input: {
          status: $status
          adminResponse: $adminResponse
          note: $note
          _id: $_id
        }
      ) {
        _id
        name
        email
        status
        adminResponses
        notes
        fileDate
        closeDate
        incidentDate
        incidentTime
        incidentLocation
        incidentDescription
        additionalInfo
        proposedAction
        anonymous
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
