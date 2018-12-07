import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faInfo,
  faAngleLeft,
  faAngleDown,
  faUser,
  faAngleUp,
  faAngleRight,
  faStickyNote,
  faTimes,
  faEye,
  faReply
} from "@fortawesome/free-solid-svg-icons";
import { onError } from "../../node_modules/apollo-link-error";

const Screen = props => {
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
            {complaint.incidentDate || "NO DATE"}
          </div>
          <div style={{ width: "45%" }} className="w-1/4 pl-24">
            {complaint.incidentDescription != null ? complaint.incidentDescription.substring(0, 100) : "NO DESCRIPTION"}
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
            <div className="w-10 h-10 bg-semi-transparent p-2 cursor-pointer hover:bg-grey-new hover:text-white">
              <FontAwesomeIcon icon={faTimes} className="fa-lg " />
            </div>
          </div>
        </div>
      );
    }

    return arr;
  };

  let showComplaint = () => {
    let _complaint = props.nav.focusComplaint;
    if (_complaint == null) return <div />;

    return (
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "99vw"
        }}
        className=""
      >
        <div
          style={{
            borderRadius: "10px",
            height: "116vh",
            zIndex: "100",
            border: "2px solid #f1f1f1"
            // boxShadow: "rgba(45, 45, 45, 0.19) 0px 2px 5px",
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
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  zIndex: "100",
                  //   boxShadow: "rgba(45, 45, 45, 0.19) 0px 2px 5px",
                  marginRight: "5px"
                }}
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

                  <div className="w-full mt-1">
                    <div className="inline-flex w-full flex py-3 bg-grey-light">
                      <div className="w-1/5 text-left pl-6">Mitch</div>
                      <div className="w-3/5 text-left">
                        Please, verify this order.
                      </div>
                      <div className="w-1/5 text-left pl-2">04/12 - 14:02</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-200 mt-4 p-2">
                  <div className="w-full px-8">
                    <textarea
                      style={{ border: "2px solid #cecece" }}
                      rows="5"
                      cols="40"
                      className="w-full mr-2"
                    />
                  </div>
                  <div className="w-full px-8">
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
                        {_complaint.reportedNames}
                      </span>
                    </p>
                  </div>
                  <div className="w-1/3 text-left pl-4">
                    <p className="uppercase font-bold">
                      Witnesses:{" "}
                      <span className="pl-2 font-normal">
                        {" "}
                        {_complaint.witnessNames}{" "}
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
                  <div className="bg-orange-new p-2 text-grey text-center uppercase hover:bg-grey-new hover:text-white cursor-pointer text-lg font-bold" onClick={() => {
                      props.updateComplaint({
                          focusComplaint: props.nav.focusComplaint,
                          adminComplaint: props.nav.complaint
                      })
                  }}>
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
        height: "823px",
        width: "99vw"
      }}
      className=""
    >
      {showComplaint()}
      {/* {props.misc.visibleScreen.includes("complainFile")
        ? showComplaint()
        : null} */}
      <div
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          overflow: "hidden",
          background: "whitesmoke"
          // boxShadow: "0px 0px 10px #cecece",
        }}
        className="w-newScreen bg-white z-50 h-650 mt-16 align-absolute"
      >
        <div className="w-full bg-grey-new text-center uppercase text-white p-2">
          <h3>Admin Panel</h3>
        </div>
        <div className="inline-block w-full bg-white text-black">
          <div
            style={{ marginTop: "35px" }}
            className="inline-flex w-full absolute pin-l pin-t p-1 bg-orange-new uppercase text-white text-sm"
          >
            <div style={{ width: "17%" }} className="w-1/4 pl-8">
              Author
            </div>
            <div style={{ width: "13%" }} className="w-1/4 text-center">
              Date
            </div>
            <div style={{ width: "45%" }} className="w-1/4 text-center">
              Preview Message
            </div>
            <div style={{ width: "15%" }} className="w-1/4 text-center">
              Status
            </div>
            <div style={{ width: "10%" }} className="w-1/4 pl-8">
              Action
            </div>
          </div>
          <div style={{ marginTop: "25px" }} className="w-full" />
          <div style={{ height: "590px" }} className="w-full overflow-y-auto">
            {showComplaints()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
