import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTimes,
  faEye,
  faReply
} from "@fortawesome/free-solid-svg-icons";
import ComplaintFile from "../Admin/ComplaintFile";

import { Subscription } from "react-apollo";
import gql from "graphql-tag";
import moment from "moment";

const Complaints = props => {
  let showComplaints = () => {
    let _complaints = props.nav.promptComplaints;
    if (_complaints == null) return <div />;

    let arr = [];
    for (let complaint of _complaints) {
      arr.push(
        <div className="inline-flex w-full p-1 bg-grey-light text-grey mt-1 flex items-center ">
          <div style={{ width: "17%" }} className="w-1/4 pl-4">
            {complaint.name || "NO NAME"}
          </div>
          <div style={{ width: "13%" }} className="w-1/4 text-center">
            {complaint.incidentDate || "Not defined"}
          </div>
          <div style={{ width: "45%" }} className="w-1/4 pl-24">
            {complaint.incidentDescription != null
              ? `${complaint.incidentDescription.substring(0, 80)}${
                  complaint.incidentDescription.length > 80 ? "..." : ""
                }`
              : "NO DESCRIPTION"}
          </div>
          <div style={{ width: "15%" }} className="w-1/4">
            <p className="text-center">{complaint.status || "NO STATUS"}</p>
          </div>
          <div
            style={{ width: "10%" }}
            className="w-1/4 pl-4 inline-flex text-center"
          >
            <div
              onClick={() => {
                props.setVisibleScreen(
                  props.misc.visibleScreen.includes("complainFile")
                    ? ["admin"]
                    : ["complainFile", "admin"]
                );
                props.setFocusComplaint({ complaint });
              }}
              className="w-10 h-10 bg-semi-transparent p-2 mr-2 cursor-pointer hover:bg-grey-new hover:text-white"
            >
              <FontAwesomeIcon icon={faEye} className="fa-lg " />
            </div>
            {complaint.status == "Closed" ? (
              <div
                className="w-10 h-10 bg-semi-transparent p-2 cursor-pointer hover:bg-grey-new hover:text-white"
                onClick={() => {
                  let _promptComplaints = props.nav.promptComplaints;
                  props.deleteComplaint({
                    _id: complaint._id,
                    promptComplaints: _promptComplaints
                  });
                }}
              >
                <FontAwesomeIcon icon={faTimes} className="fa-lg " />
              </div>
            ) : null}
          </div>
        </div>
      );
    }

    return arr;
  };

  return (
    <div
      style={{
        position: "absolute",
        height: "823px",
        width: "99vw"
      }}
      className=""
    >
      {props.misc.visibleScreen.includes("complainFile") ? (
        <ComplaintFile {...props} />
      ) : null}
      <div
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          overflow: "hidden",
          background: "whitesmoke"
        }}
        className="w-newScreen bg-white z-50 h-650 mt-16 align-absolute"
      >
        <div className="w-full bg-grey-new text-center uppercase text-white p-2">
          <h3>All Complaints</h3>
        </div>
        <div className="inline-block w-full bg-white text-black">
          <div
            style={{ marginTop: "35px" }}
            className="inline-flex w-full absolute pin-l pin-t p-1 bg-orange-new uppercase text-white text-sm"
          >
            <div style={{ width: "17%" }} className="pl-8">
              Author
            </div>
            <div style={{ width: "13%" }} className="text-center">
              Date
            </div>
            <div style={{ width: "45%" }} className="pl-16">
              Preview Message
            </div>
            <div style={{ width: "15%" }} className="text-center">
              Status
            </div>
            <div style={{ width: "10%" }} className="pl-8">
              Action
            </div>
          </div>
          <div style={{ marginTop: "25px" }} className="w-full" />
          <div style={{ height: "590px" }} className="w-full overflow-y-auto">
            {showComplaints()}
          </div>
        </div>
      </div>
      <Subscription subscription={subscription.complaintUpdate}>
        {({ data }) => {
          if (data != null) {
            let _promptComplaints = props.nav.promptComplaints;
            let _complaint = data.complaintUpdate;
            let _focusComplaint = props.nav.focusComplaint;

            console.log("SUB", _complaint);
            if (
              !JSON.stringify(_promptComplaints).includes(
                JSON.stringify(_complaint)
              )
            ) {
              props.modifyComplaint({
                complaint: _complaint,
                promptComplaints: _promptComplaints,
                focusComplaint: _focusComplaint
              });
            }
          }
          return <div />;
        }}
      </Subscription>
    </div>
  );
};

const subscription = {
  complaintUpdate: gql`
    subscription {
      complaintUpdate {
        _id
        name
        email
        status
        fileDate
        closeDate
        incidentDate
        incidentTime
        incidentLocation
        incidentDescription
        additionalInfo
        proposedAction
        adminResponse
        anonymous
        witnessNames
        reportedNames
        notes
      }
    }
  `
};

export default Complaints;
