import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleDown,
  faStickyNote,
  faTimes,
  faReply
} from "@fortawesome/free-solid-svg-icons";
import Notes from "../Admin/Notes";

import moment from "moment"

const ComplaintFile = props => {
  let showComplaint = () => {
    let _complaint = props.nav.focusComplaint;
    if (_complaint == null) return <div />;

    return (
      <div
        style={{ position: "absolute", height: "100%", width: "99vw" }}
        className=""
      >
        <div
          style={{
            borderRadius: "10px",
            height: "120vh",
            zIndex: "100",
            boxShadow: "0px 1px 4px rgb(187, 187, 187)",
           
          }}
          className="w-newScreen align-absolute mx-auto absolute mt-16 bg-white pin-auto h-full"
        >
          <div
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
            className="inline-flex bg-grey-new w-full flex items-center overflow-hidden"
          >
            <div
              onClick={() => {
                props.setVisibleScreen("admin");
                props.clearItem();
              }}
              className="w-1/3 h-10 inline-flex bg-grey-new"
            >
              <h4 className="p-2 text-white uppercase text-lg bg-orange-new flex items-center hover:bg-semi-transparent text-grey cursor-pointer">
                <FontAwesomeIcon icon={faAngleLeft} className="fa-2x mr-4" />
                Back
              </h4>
            </div>
            <div className="text-white p-2 w-1/3 text-center bg-grey-new uppercase ">
              <h3 className="">Complaint Viewer</h3>
            </div>
            <div className="text-white h-10 w-1/3 text-right bg-grey-new uppercase ">
              <span
                onClick={() => {
                  props.setVisibleScreen(
                    props.misc.visibleScreen.includes("noteBy")
                      ? ["complainFile", "admin"]
                      : ["noteBy", "complainFile", "admin"]
                  );
                }}
                style={{
                  borderRadius: "30%",
                  width: "28px",
                  height: "28px",
                  marginTop: "4px",
                  padding: "6px",
                  fontSize: "17px"
                }}
                className="flex justify-center text-grey float-right bg-almost-white mr-4 hover:bg-white cursor-pointer"
              >
                <FontAwesomeIcon icon={faStickyNote} />
              </span>
            </div>
          </div>
          <div className="w-full mt-4 py-2 px-6 overflow-y-auto">
            <div className="w-full mt-4 py-1 px-6 overflow-y-auto">
              <div
                style={{
                  // borderTopLeftRadius: "10px",
                  // borderTopRightRadius: "10px"
                }}
                className="w-full bg-grey-new-light uppercase text-white px-6 text-center p-2"
              >
                <h4>Reporter by:</h4>
              </div>
            </div>
            <div className="w-full px-6">
              <div className="inline-flex w-full mt-1 flex py-3 bg-grey-lighter">
                <div className="w-1/3 text-left pl-4 ">
                  <p className="uppercase font-bold">
                    Name:{" "}
                    <span className="pl-2 font-normal uppercase"> {_complaint.name}</span>
                  </p>
                </div>
                <div className="w-1/3 text-left pl-4">
                  <p className="uppercase font-bold">
                    Email:{" "}
                    <span className="pl-2 font-normal">
                      {" "}
                      {_complaint.email}
                    </span>
                  </p>
                </div>
                <div className="w-1/3 text-left pl-4">
                  <p className="uppercase font-bold">
                    Submitted on:{" "}
                    <span className="pl-2 font-normal">
                      {" "}
                      {moment(_complaint.fileDate).format("DD/MM/YYYY - HH:MM:MM")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {props.misc.visibleScreen.includes("noteBy") ? (
              <Notes {...props} complaint={_complaint} />
            ) : null}

            <div className="w-full mt-4 py-2 px-6 overflow-y-auto">
              <div
                style={{
                  // borderTopLeftRadius: "10px",
                  // borderTopRightRadius: "10px"
                }}
                className="w-full bg-grey-new-light uppercase text-white text-center p-2"
              >
                <h4>Reported:</h4>
              </div>
              <div className="w-full mt-1">
                <div className="inline-flex w-full flex mt-1 py-3 bg-grey-lighter">
                  <div className="w-1/3 text-left pl-4 ">
                    <p className="uppercase font-bold">
                      Date:{" "}
                      <span className="pl-2 font-normal">
                        {" "}
                        {moment(_complaint.incidentDate).format("DD/MM/YYYY")}
                      </span>
                    </p>
                  </div>
                  <div className="w-1/3 text-left pl-4">
                    <p className="uppercase font-bold">
                      Hour:{" "}
                      <span className="pl-2 font-normal uppercase">
                      {moment(_complaint.incidentTime).format("HH:MM:SS") || "Not informed"}
                      </span>
                    </p>
                  </div>
                  <div className="w-1/3 text-left pl-4">
                    <p className="uppercase font-bold">
                      Location:{" "}
                      <span className="pl-2 font-normal">
                        {" "}
                        {_complaint.incidentLocation}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="inline-flex w-full flex py-3  mt-2 bg-grey-lighter">
                  <div className="w-1/3 text-left pl-4 ">
                    <p className="uppercase font-bold">
                      Reported Parties:{" "}
                      <span className="pl-2 font-normal">
                        {" "}
                        {_complaint.reportedNames
                          ? _complaint.reportedNames.toString()
                          : "NO REPORTEES"}
                      </span>
                    </p>
                  </div>
                  <div className="w-1/3 text-left pl-4">
                    <p className="uppercase font-bold">
                      Witnesses:{" "}
                      <span className="pl-2 font-normal">
                        {" "}
                        {_complaint.witnessNames != null
                          ? _complaint.witnessNames.toString()
                          : "NO WITNESS"}{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="inline-flex w-full flex py-3  mt-2 bg-grey-lighter">
                  <div className="w-full text-left px-4 inline-flex">
                    <div className="w-32">
                      <p className="uppercase font-bold">Description:</p>
                    </div>
                    <div
                      style={{ height: "110px" }}
                      className="w-full  overflow-y-auto"
                    >
                      <p className="font-normal text-justify px-4 uppercase">
                        {_complaint.incidentDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full py-2 mt-4 px-6 overflow-y-auto">
              <div
                style={{
                  // borderTopLeftRadius: "10px",
                  // borderTopRightRadius: "10px"
                }}
                className="w-full bg-grey-new-light uppercase text-white text-center p-2"
              >
                <h4>Additional Information:</h4>
              </div>
              <div className="inline-flex w-full flex py-3 mt-2 bg-grey-lighter">
                <div className="w-full text-left px-4 inline-flex">
                  <div className="w-32">
                    <p className="uppercase font-bold">Description:</p>
                  </div>
                  <div
                    style={{ height: "110px" }}
                    className="w-full overflow-y-auto"
                  >
                    <p className="font-normal text-justify px-4 uppercase">
                      {_complaint.additionalInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-2 mt-4 px-6 overflow-y-auto">
              <div
                style={{
                  // borderTopLeftRadius: "10px",
                  // borderTopRightRadius: "10px"
                }}
                className="w-full bg-grey-new-light uppercase text-white text-center p-2"
              >
                <h4>Proposed Action:</h4>
              </div>
              <div className="inline-flex w-full flex py-3 mt-2 bg-grey-lighter">
                <div className="w-full text-left px-4 inline-flex">
                  <div className="w-32">
                    <p className="uppercase font-bold">Description:</p>
                  </div>
                  <div
                    style={{ height: "110px" }}
                    className="w-full overflow-y-auto"
                  >
                    <p className="font-normal text-justify px-4 uppercase">
                      {_complaint.proposedAction}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full py-2 mt-4 px-6 overflow-y-auto">
              <div
                style={{
                  // borderTopLeftRadius: "10px",
                  // borderTopRightRadius: "10px"
                }}
                className="w-full bg-grey-new-light uppercase text-white text-center p-2"
              >
                <h4>Admin Actions:</h4>
              </div>
              <div className="text-grey p-2 flex justify-end items-center w-full inline-flex bg-grey-light uppercase mt-2">
                <p className="pl-2 font-bold">Status:</p>
                <select
                  className="w-100 ml-4"
                  id="status"
                  onChange={e => {
                    props.setComplaint({
                      complaint: props.nav.complaint,
                      key: e.target.id,
                      value: e.target.value
                    });
                  }}
                >
                  <option value="Awaiting">Awaiting</option>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <div className="w-full pin-b h-200 mt-4 py-2">
                <div className="w-full">
                  <textarea
                    style={{ border: "2px solid #cecece" }}
                    rows="5"
                    cols="40"
                    id="adminResponse"
                    onChange={e => {
                      props.setComplaint({
                        complaint: props.nav.complaint,
                        key: e.target.id,
                        value: e.target.value
                      });
                    }}
                    className="w-full mr-2"
                  />
                </div>
                <div className="w-full mt-2">
                  <div
                    className="bg-orange-new p-2 text-grey text-center uppercase hover:bg-grey-new hover:text-white cursor-pointer text-lg font-bold"
                    onClick={() => {
                      props.updateComplaint({
                        focusComplaint: props.nav.focusComplaint,
                        adminComplaint: props.nav.complaint
                      });
                    }}
                  >
                    Send Message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "99vw"
      }}
      className=""
    >
      {showComplaint()}
    </div>
  );
};

export default ComplaintFile;
