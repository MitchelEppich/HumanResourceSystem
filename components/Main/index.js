import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faInfo,
  faSyncAlt,
  faTimes,
  faCheckDouble
} from "@fortawesome/free-solid-svg-icons";
import SuccessMessage from "../Main/SuccessMessage";
import Login from "../Admin/Login";
import UserViewer from "../Admin/UserViewer";

const Main = props => {
  let showNames = () => {
    if (props.user.promptUsers == null) return;
    let arr = [];

    for (let user of props.user.promptUsers) {
      arr.push(
        <option key={user.name} value={user.name} email={user.email}>
          {user.name}
        </option>
      );
    }
    return arr;
  };

  let showReportedNames = () => {
    if (props.nav.complaint.reportedNames == null) return;
    let arr = [];
    for (let name of props.nav.complaint.reportedNames) {
      arr.push(
        <div className="w-250 p-2 bg-grey-light mt-1 text-grey inline-flex mr-2 cursor-pointer hover:bg-grey-lighter hover:text-grey-new">
          <p className="w-full capitalize text-center">{name}</p>
          <FontAwesomeIcon icon={faTimes} className="text-right fa-lg ml-2" />
        </div>
      );
    }
    return arr;
  };

  let showWitnesses = () => {
    if (props.nav.complaint.witnessNames == null) return;
    let arr = [];
    for (let name of props.nav.complaint.witnessNames) {
      arr.push(
        <div className="w-250 p-2 bg-grey-light mt-1 text-grey inline-flex mr-2 cursor-pointer hover:bg-grey-lighter hover:text-grey-new">
          <p className="w-full capitalize text-center">{name}</p>
          <FontAwesomeIcon icon={faTimes} className="text-right fa-lg ml-2" />
        </div>
      );
    }
    return arr;
  };

  let showHours = () => {
    let arr = [];
    for (let i = 1; i <= 24; i++) {
      let hour = i;
      let denom;
      if (hour > 12) {
        hour -= 12;
        denom = "PM";
      } else denom = "AM";
      let value = `${hour.toString().padStart(2, "0")}:00 ${denom}`;
      arr.push(
        <div
          style={{
            width: "75px",
            float: "left",
            padding: "4px"
          }}
          className="hover:bg-blue-light cursor-pointer text-sm text-center"
          name="incidentTime"
          id="incidentTime"
          onClick={e => {
            props.setComplaint({
              complaint: props.nav.complaint,
              key: e.target.id,
              value: value
            });
            props.setVisibleScreen(["home"]);
          }}
          key={value}
        >
          {value}
        </div>
      );
    }
    return arr;
  };

  return (
    <div className="w-full bg-grey-light overflow-x-hidden">
      <div
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: "0",
          right: "0",
          height: "785px"
        }}
        className="w-newScreen h-halfscreen text-white mt-16 max-w-maxScreen"
      >
        {props.misc.visibleScreen == null ||
        (!props.misc.visibleScreen.includes("complaints") &&
          !props.misc.visibleScreen.includes("thanksMessage")) ? (
          <form
            onSubmit={e => {
              e.preventDefault();
              if (
                props.nav.complaint.reportedNames == null ||
                props.nav.complaint.reportedNames.length == 0
              )
                return;

              props.setVisibleScreen(["successMessage"]);
              props.postComplaint(props.nav.complaint);
            }}
          >
            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                overflow: "hidden",
                border: "2px solid rgba(249, 249, 249, 0.96)",
                boxShadow: "0px 0px 1px rgba(43, 43, 43, 0.05)"
              }}
              className="w-full justify-between"
            >
              <div className="w-full bg-grey-new text-center uppercase p-2">
                <h3>Context</h3>
              </div>
              <div className="w-full p-2 bg-white text-black">
                <p className="p-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis dolor repellendus.
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
              </div>
            </div>

            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                overflow: "hidden",
                border: "2px solid rgba(249, 249, 249, 0.96)",
                boxShadow: "0px 0px 1px rgba(43, 43, 43, 0.05)"
              }}
              className="w-full  justify-between mt-12"
            >
              <div className="w-full bg-grey-new text-center uppercase p-2">
                <h3>Reporter</h3>
              </div>
              <p className="text-center text-grey p-2 bg-grey-light uppercase text-sm">
                Please, insert here your information:
              </p>
              <div className="w-full inline-flex h-100 p-2 bg-white text-black pt-10">
                <div className="w-1/3 h-10  inline-flex  flex items-center">
                  <label className="mr-2">Name:</label>
                  <select
                    className="w-200 p-1 ml-4"
                    id="name"
                    required
                    onChange={e => {
                      let _value = e.target.value;
                      let _email = e.target.options[
                        e.target.selectedIndex
                      ].getAttribute("email");
                      props.setComplaint({
                        complaint: props.nav.complaint,
                        key: e.target.id,
                        value: _value
                      });
                      props.setComplaint({
                        complaint: props.nav.complaint,
                        key: "email",
                        value: _email
                      });
                    }}
                  >
                    <option value="" disabled selected>
                      Select here...
                    </option>
                    {showNames()}
                  </select>
                </div>

                <div className="w-1/3 h-10 inline-flex flex items-center">
                  <label className="mr-2">Anonymous:</label>
                  <input
                    type="checkbox"
                    name="anonymous"
                    id="anonymous"
                    onChange={e => {
                      props.setComplaint({
                        complaint: props.nav.complaint,
                        key: e.target.id,
                        value: e.target.checked
                      });
                    }}
                    className="p-2 checkbox h-10"
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                overflow: "hidden",
                border: "2px solid rgba(249, 249, 249, 0.96)",
                boxShadow: "0px 0px 1px rgba(43, 43, 43, 0.05)"
              }}
              className="w-full mt-12"
            >
              <div className="w-full text-center bg-grey-new uppercase p-2">
                <h3>Report</h3>
              </div>
              <p className="text-center text-grey p-2 bg-grey-light uppercase text-sm">
                Please, insert here your information:
              </p>
              <div className="w-full inline-flex  p-2 bg-white text-black pt-10">
                <div className="w-1/3 h-10 mx-auto inline-flex  flex items-center">
                  <label className="mr-2">Date:</label>
                  <input
                    type="date"
                    placeholder=""
                    className="p-2 w-300 h-10"
                    name="incidentDate"
                    id="incidentDate"
                    required
                    onChange={e => {
                      props.setComplaint({
                        complaint: props.nav.complaint,
                        key: e.target.id,
                        value: e.target.value
                      });
                    }}
                  />
                </div>
                <div className="w-1/3 h-10 mx-auto inline-flex flex items-center">
                  <label className="mr-2">Time:</label>
                  <div
                    onClick={e => {
                      e.preventDefault();
                      props.setVisibleScreen(
                        props.misc.visibleScreen.includes("showHours")
                          ? "home"
                          : ["showHours", "home"]
                      );
                    }}
                    style={{
                      border: "2px solid #e6e6e6",
                      borderRadius: "7px",
                      background: "white",
                      padding: "8px",
                      height: "38px"
                    }}
                    className="w-250 p-1"
                  >
                    <div
                      style={{
                        WebkitAppearance: "menulist",
                        boxSizing: "border-box",
                        alignItems: "center",
                        whiteSpace: "pre",
                        WebkitRtlOrdering: "logical",
                        color: "black",
                        cursor: "default"
                      }}
                    >
                      {props.nav.complaint != null &&
                      props.nav.complaint.incidentTime != null
                        ? props.nav.complaint.incidentTime
                        : "Select time"}
                    </div>
                  </div>

                  {props.misc.visibleScreen.includes("showHours") ? (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        width: "340px",
                        height: "155px",
                        display: "block",
                        padding: "5px",
                        MozColumnCount: "4",
                        WebkitColumnCount: "4",
                        columnCount: "4",
                        border: "2px solid #e6e6e6",
                        borderRadius: "5px",
                        position: "absolute",
                        marginLeft: "46px",
                        marginTop: "97px"
                      }}
                    >
                      {showHours()}
                    </div>
                  ) : null}
                </div>
                <div className="w-1/3 h-10 mx-auto inline-flex flex items-center">
                  <label className="mr-2">Location:</label>
                  <select
                    className="w-250 p-1 ml-4"
                    id="incidentLocation"
                    required
                    onChange={e => {
                      props.setComplaint({
                        complaint: props.nav.complaint,
                        key: e.target.id,
                        value: e.target.value
                      });
                    }}
                  >
                    <option value="" disabled selected>
                      Select here...
                    </option>
                    <option value="Media Room">Media Room</option>
                    <option value="Production Room">Production Room</option>
                    <option value="CSR Room">CSR Room</option>
                    <option value="Packaging Center">Packaging Center</option>
                    <option value="Loading Dock">Loading Dock</option>
                    <option value="Online">Online</option>
                  </select>
                </div>
              </div>

              <div className="w-full inline-flex p-2 mt-10 text-right flex justify-end bg-white text-black ">
                <div className="text-left h-10 mt-2 items-center">
                  <label className="mr-2">Description:</label>
                </div>
                <div className="w-full pr-12">
                  <textarea
                    cols="50"
                    rows="10"
                    required
                    name="incidentDescription"
                    id="incidentDescription"
                    onChange={e => {
                      props.setComplaint({
                        complaint: props.nav.complaint,
                        key: e.target.id,
                        value: e.target.value
                      });
                    }}
                    className="p-2 h-10 w-full h-32"
                    placeholder="Describe here what happened..."
                  />
                </div>
              </div>

              <div className="w-full p-2 inline-flex mt-10 bg-white text-black ">
                <div className="w-450 text-left pr-4">
                  <div className="w-full inline-flex flex items-center">
                    <label className="mr-2">Report Parties:</label>
                    <select
                      name="reportedNames"
                      className="w-250 p-1 ml-4"
                      id="reportedName"
                      required
                      onChange={e => {
                        props.setComplaint({
                          complaint: props.nav.complaint,
                          key: e.target.id,
                          value: e.target.value
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        Select here...
                      </option>
                      {showNames()}
                    </select>
                    <FontAwesomeIcon
                      onClick={() => {
                        let reportedNames =
                          props.nav.complaint.reportedNames || [];
                        let _new = props.nav.complaint.reportedName;
                        if (reportedNames.includes(_new) || _new == null)
                          return;
                        props.setComplaint({
                          complaint: props.nav.complaint,
                          key: "reportedNames",
                          value: [...reportedNames, _new]
                        });
                      }}
                      icon={faPlus}
                      className="cursor-pointer text-grey ml-2 fa-lg hover:text-grey-new"
                    />
                  </div>
                  <div
                    style={{ paddingRight: "69px" }}
                    className="w-450 mb-2 text-right"
                  >
                    {showReportedNames()}
                  </div>
                </div>
                <div className="w-1/2 text-left pr-4">
                  <div className="w-full inline-flex flex items-center">
                    <label className="mr-2">Witnesses:</label>
                    <select
                      name="witnessNames"
                      id="witnessName"
                      className="w-250 p-1 ml-4"
                      onChange={e => {
                        props.setComplaint({
                          complaint: props.nav.complaint,
                          key: e.target.id,
                          value: e.target.value
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        Select here...
                      </option>
                      {showNames()}
                    </select>
                    <FontAwesomeIcon
                      onClick={() => {
                        let witnessNames =
                          props.nav.complaint.witnessNames || [];
                        let _new = props.nav.complaint.witnessName;

                        if (witnessNames.includes(_new) || _new == null) return;
                        props.setComplaint({
                          complaint: props.nav.complaint,
                          key: "witnessNames",
                          value: [...witnessNames, _new]
                        });
                      }}
                      icon={faPlus}
                      className="cursor-pointer text-grey ml-2 fa-lg hover:text-grey-new"
                    />
                  </div>
                  <div
                    style={{ paddingRight: "97px" }}
                    className="w-450 mb-2 text-right"
                  >
                    {showWitnesses()}
                  </div>
                </div>
              </div>
              <div className="w-full inline-flex">
                <div className="w-1/2 mb-2 ml-2 pr-10 text-right">
                  {/* {showWitnesses()} */}
                </div>
              </div>
            </div>

            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                overflow: "hidden",
                border: "2px solid rgba(249, 249, 249, 0.96)",
                boxShadow: "0px 0px 1px rgba(43, 43, 43, 0.05)"
              }}
              className="w-full mt-12"
            >
              <div className="w-full text-center bg-grey-new uppercase p-2">
                <h3>Additional Information</h3>
              </div>

              <div className="w-full inline-flex p-2 mt-8 text-right flex justify-end bg-white text-black ">
                <div className="text-left h-10 mt-2 items-center">
                  <label className="mr-2">Description:</label>
                </div>
                <div className="w-full pr-12">
                  <textarea
                    cols="50"
                    rows="10"
                    name="additionalInfo"
                    id="additionalInfo"
                    onChange={e => {
                      props.setComplaint({
                        complaint: props.nav.complaint,
                        key: e.target.id,
                        value: e.target.value
                      });
                    }}
                    className="p-2 h-10 w-full h-32"
                    placeholder="If you have an extra information, please insert here..."
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                overflow: "hidden",
                border: "2px solid rgba(249, 249, 249, 0.96)",
                boxShadow: "0px 0px 1px rgba(43, 43, 43, 0.05)"
              }}
              className="w-full mt-12 relative"
            >
              <div className="w-full text-center bg-grey-new uppercase p-2">
                <h3>Proposed Action</h3>
              </div>

              <div className="w-full inline-flex p-2 mt-8 text-right flex justify-end bg-white text-black ">
                <div className="text-left h-10 mt-2 items-center">
                  <label className="mr-2">Description:</label>
                </div>
                <div className="w-full pr-12">
                  <textarea
                    cols="50"
                    rows="10"
                    name="proposedAction"
                    id="proposedAction"
                    onChange={e => {
                      props.setComplaint({
                        complaint: props.nav.complaint,
                        key: e.target.id,
                        value: e.target.value
                      });
                    }}
                    className="p-2 h-10 w-full h-32"
                    placeholder="What do you propose?"
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                overflow: "hidden",
                border: "2px solid rgba(249, 249, 249, 0.96)",
                boxShadow: "0px 0px 1px rgba(43, 43, 43, 0.05)"
              }}
              className="w-full justify-between mt-12"
            >
              <div className="w-full text-center bg-grey-new uppercase p-2">
                <h3>Disclaimer</h3>
              </div>
              <div className="w-full p-2 bg-white text-black">
                <p className="p-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis dolor repellendus.
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
                <div className="w-300 mt-4 mb-2 ml-2">
                  <label>
                    <input
                      type="checkbox"
                      name="acceptCheck"
                      id="acceptCheck"
                      required
                      onChange={e => {
                        props.setComplaint({
                          complaint: props.nav.complaint,
                          key: e.target.id,
                          value: e.target.checked
                        });
                      }}
                      className="mr-2 checkbox"
                    />
                    I Accept the Terms{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end mt-4 mb-24">
              <button
                type="submit"
                className={`${
                  // Also check if others are filled in
                  props.nav.complaint["acceptCheck"]
                    ? "cursor-pointer hover:bg-grey-new hover:text-white"
                    : "opacity-50 pointer-events-none"
                } bg-orange-new p-2 w-300 text-center text-grey uppercase`}
              >
                Submit
              </button>
            </div>
          </form>
        ) : null}

        {props.misc.visibleScreen.includes("thanksMessage") ? (
          <SuccessMessage {...props} />
        ) : null}
      </div>
    </div>
  );
};

export default Main;
