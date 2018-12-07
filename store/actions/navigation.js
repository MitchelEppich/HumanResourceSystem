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
  UPDATE_COMPLAINT: "UPDATE_COMPLAINT"
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

        const operation = {
          query: mutation.updateComplaint,
          variables: { ...input.adminComplaint, _id: input.focusComplaint._id }
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
        adminResponse
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
        adminResponse
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
        adminResponse
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
