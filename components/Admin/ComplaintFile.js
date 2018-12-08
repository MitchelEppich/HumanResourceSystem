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

import moment from "moment";

const ComplaintFile = props => {
  let showComplaint = () => {
    let _complaint = props.nav.focusComplaint;
    if (_complaint == null) return <div />;

    let showNotes = () => {
      let arr = [];
      let _notes = props.nav.focusComplaint.notes;
      if (_notes == null) return null;
      for (let note of _notes) {
        let _content = note.split("//&");
        arr.push(
          <div className="inline-flex w-full p-2 bg-grey-light">
            <div className="w-1/5 text-left pl-6">{_content[0]}</div>
            <div className="w-3/5 text-left">{_content[1]}</div>
            <div className="w-1/5 text-left pl-6">
              {moment(_content[2]).format("DD-MM-YYYY hh:mm:ss")}
            </div>
          </div>
        );
      }

      return arr;
    };

    return (
      <div
        style={{ position: "absolute", height: "100%", width: "99vw" }}
        className=""
      >
        <div
          style={
            {
              borderRadius: "10px",
              height: "116vh",
              zIndex: "100",
              border: "2px solid #f1f1f1"
            }
            // boxShadow: "rgba(45, 45, 45, 0.19) 0px 2px 5px",
          }
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
            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
              className="w-full bg-grey-new-light uppercase text-white text-center p-2"
            >
              <h4>Reporter by:</h4>
            </div>
            <div className="w-full mt-1">
              <div className="inline-flex w-full mt-1 flex py-3 bg-grey-lighter">
                <div className="w-1/3 text-left pl-4 ">
                  <p className="uppercase font-bold">
                    Name:{" "}
                    <span className="pl-2 font-normal"> {_complaint.name}</span>
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
                      {_complaint.fileDate}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {props.misc.visibleScreen.includes("noteBy") ? (
              <div
                style={
                  {
                    borderRadius: "10px",
                    overflow: "hidden",
                    zIndex: "100",
                    marginRight: "5px"
                  } //   boxShadow: "rgba(45, 45, 45, 0.19) 0px 2px 5px",
                }
                className="absolute bg-white pin-r pin-t w-550 h-550 mt-10"
              >
                <div className="text-white p-2 text-center uppercase bg-orange-new">
                  <h3>Notes</h3>
                </div>
                <div className="w-full mt-6 py-2 h-300 overflow-y-auto">
                  <div
                    style={{ marginTop: "35px" }}
                    className="inline-flex w-full absolute pin-l pin-t p-1 bg-grey-new uppercase text-white text-sm"
                  >
                    <div className="w-1/5 pl-8 text-left">User</div>
                    <div className="w-3/5 text-left">Message</div>
                    <div className="w-1/5 text-center">Date</div>
                  </div>

                  <div className="w-full mt-1">{showNotes()}</div>
                </div>
                <div className="w-full h-200 mt-4 p-2">
                  <div className="w-full px-8">
                    <textarea
                      style={{ border: "2px solid #cecece" }}
                      rows="5"
                      cols="40"
                      className="w-full mr-2"
                      id="noteEntry"
                    />
                  </div>
                  <div
                    className="w-full px-8"
                    onClick={() => {
                      let _noteEntry = document.querySelector("#noteEntry")
                        .value;
                      document.querySelector("#noteEntry").value = "";
                      props.updateComplaint({
                        note: `${
                          props.user.currentUser.username
                        }//&${_noteEntry}//&${new Date()}`,
                        focusComplaint: _complaint
                      });
                    }}
                  >
                    <div className="bg-grey-new cursor-pointer p-2 text-white text-center uppercase hover:bg-orange-new hover:text-grey">
                      Send
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="w-full mt-4 py-2 px-6 overflow-y-auto">
              <div
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px"
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
                        {_complaint.incidentDate}
                      </span>
                    </p>
                  </div>
                  <div className="w-1/3 text-left pl-4">
                    <p className="uppercase font-bold">
                      Hour:{" "}
                      <span className="pl-2 font-normal">
                        {_complaint.incidentTime}
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
                      <p className="font-normal text-justify px-4">
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
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px"
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
                    <p className="font-normal text-justify px-4">
                      {_complaint.additionalInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-2 mt-4 px-6 overflow-y-auto">
              <div
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px"
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
                    <p className="font-normal text-justify px-4">
                      {_complaint.proposedAction}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full py-2 mt-4 px-6 overflow-y-auto">
              <div
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px"
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
