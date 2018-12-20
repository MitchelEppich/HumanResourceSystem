import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTimes,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";

import moment from "moment";

const RegisterUser = props => {
  // console.log(props)

  let showJobTitles = () => {
    if (props.user.userData.jobTitle == null) return;
    let arr = [];
    for (let title of props.user.userData.jobTitle) {
      arr.push(
        <div className="p-2 bg-grey-light text-grey uppercase mt-1 inline-flex flex items-center text-right justify-end hover:bg-grey-lightest hover:text-grey-new cursor-pointer mr-2">
          <h4 className="px-4 capitalize">{title}</h4>
          <FontAwesomeIcon icon={faTimes} className="fa-lg cursor-pointer" />
        </div>
      );
    }
    return arr;
  };

  let showNotes = () => {
    let _notes = props.user.userData.adminNotes;
    if (_notes == null) return;
    let arr = [];
    for (let note of _notes) {
      arr.push(
        <div className="w-full p-2 mt-2 bg-white">
          <div
            style={{ width: "50%" }}
            className="p-2 bg-grey-lighter text-grey mt-1 inline-flex flex items-center text-justify mr-2"
          >
            <p className="px-4 text-left">{note}</p>
            <FontAwesomeIcon
              onClick={() => {
                _notes = _notes.filter(a => {
                  if (a == note) return false;
                  return true;
                });
                props.setUserData({
                  userData: props.user.userData,
                  key: "adminNotes",
                  value: _notes
                });
              }}
              icon={faTimes}
              className="fa-lg cursor-pointer justify-end"
            />
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
        height: "820px",
        width: "99vw"
      }}
    >
      <div
        style={{
          // boxShadow: "0 0 4px rgba(220, 220, 220, 0.4)",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          overflow: "hidden",
          top: "60px"
        }}
        className="w-newScreen align-absolute bg-white text-center pin-auto"
      >
        <div
          style={{ overflow: "hidden" }}
          className="inline-flex w-full bg-grey-new relative"
        >
          <div
            onClick={() => {
              props.setVisibleScreen("userViewer");
            }}
            className="w-100 h-full inline-flex absolute"
          >
            <h4
              className="p-2 text-white uppercase text-lg bg-orange-new flex items-center hover:bg-semi-transparent text-grey cursor-pointer"
              onClick={() => {
                props.clearUserData();
                props.setFocusUser({ user: null });
              }}
            >
              <FontAwesomeIcon icon={faAngleLeft} className="fa-2x mr-4" />
              Back
            </h4>
          </div>
          <div className="w-full">
            <h3 className="p-2 text-center text-white uppercase">
              {props.nav.focusUser != null
                ? "Update New User"
                : "Register New User"}
            </h3>
          </div>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            let _user = props.nav.focusUser;
            if (_user != null) {
              props.updateUser({
                username: _user.username,
                ...props.user.userData
              });
              props.setFocusUser({ user: null });
            } else
              props.registerCredentials(props.user.userData).then(res => {
                props.fetchUsers();
              });
            props.setVisibleScreen(["userViewer"]);
          }}
        >
          <div className="w-full h-650 bg-white overflow-y-auto">
            <div className="inline-flex w-full bg-grey-lighter py-2 text-grey p-1 mt-2 flex items-center">
              <div className="w-2/4 uppercase">
                <div className="w-full pl-6 text-left inline-flex flex items-center">
                  <div style={{ width: "135px" }} className="text-left">
                    <label className="font-bold pr-2">Name User:</label>
                  </div>
                  <div className="w-300">
                    <input
                      type="text"
                      required
                      placeholder="Required"
                      className="p-2 w-300"
                      id="name"
                      value={props.user.userData.name}
                      onChange={e => {
                        let _value = e.target.value;
                        props.setUserData({
                          userData: props.user.userData,
                          key: e.target.id,
                          value: _value
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-2/4 uppercase">
                <div className="w-full pl-6 text-left inline-flex flex items-center">
                  <label className="font-bold pr-2">Reports to:</label>
                  <select
                    className="w-300 p-1 flex items-center"
                    id="reportsTo"
                    value={props.user.userData.reportsTo}
                    onChange={e => {
                      let _value = e.target.value;
                      props.setUserData({
                        userData: props.user.userData,
                        key: e.target.id,
                        value: _value
                      });
                    }}
                  >
                    <option value="" disabled selected>
                      Select an option...
                    </option>
                    <option value="Kyle">Kyle</option>
                    <option value="James">James</option>
                    <option value="Leah">Leah</option>
                    <option value="Mitchel">Mitchel</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full mt-2 p-1 pb-2 bg-grey-lighter">
              <div className="w-2/4 pl-6 mt-2 inline-flex flex items-center">
                <div style={{ width: "135px" }} className="text-left">
                  <label className="font-bold pr-2 text-left uppercase">
                    Job Title:
                  </label>
                </div>
                <div className="w-300 inline-flex flex items-center">
                  <input
                    type="text"
                    id="_title"
                    placeholder="Add here..."
                    className="p-2 w-300"
                    onChange={e => {
                      let _value = e.target.value;
                      props.setUserData({
                        userData: props.user.userData,
                        key: e.target.id,
                        value: _value
                      });
                    }}
                  />

                  <div className="w-10 h-10 flex items-center">
                    <FontAwesomeIcon
                      onClick={() => {
                        let jobTitle = props.user.userData.jobTitle || [];
                        let _new = props.user.userData._title;
                        if (jobTitle.includes(_new) || _new == null) return;

                        props.setUserData({
                          userData: props.user.userData,
                          key: "jobTitle",
                          value: [...jobTitle, _new]
                        });
                      }}
                      icon={faPlus}
                      className="cursor-pointer text-grey ml-2 fa-lg hover:text-grey-new"
                    />
                  </div>
                </div>
              </div>
              <div className="w-2/4 mt-1 inline-flex ">{showJobTitles()}</div>
            </div>
            <div className="inline-flex w-full bg-grey-lighter text-grey p-1 mt-2 flex items-center">
              <div className="w-2/4 uppercase pt-2 pb-2">
                <div className="w-full pl-6 text-left inline-flex flex items-center">
                  <div style={{ width: "135px" }} className="text-left">
                    <label className="font-bold pr-2">Starting Date:</label>
                  </div>
                  <div className="w-300">
                    <input
                      type="date"
                      id="startingDate"
                      placeholder="Insert here.."
                      className="p-2 w-300"
                      value={moment(props.user.userData.startingDate)
                        .add(1, "day")
                        .format("YYYY-MM-DD")}
                      onChange={e => {
                        let _value = e.target.value;
                        props.setUserData({
                          userData: props.user.userData,
                          key: e.target.id,
                          value: _value
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-2/4 uppercase">
                <div className="w-full pl-6 text-left inline-flex flex items-center">
                  <div style={{ width: "100px" }} className="text-left">
                    <label className="font-bold pr-2">Phone #:</label>
                  </div>
                  <div className="w-300">
                    <input
                      type="text"
                      id="phone"
                      placeholder=""
                      className="p-2 w-300"
                      value={props.user.userData.phone}
                      onChange={e => {
                        let _value = e.target.value;
                        props.setUserData({
                          userData: props.user.userData,
                          key: e.target.id,
                          value: _value
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full bg-grey-lighter text-grey p-1 mt-2 flex items-center">
              <div className="w-2/4 uppercase">
                <div className="w-full pl-6 text-left mt-1 inline-flex flex items-center">
                  <div style={{ width: "135px" }} className="text-left">
                    <label className="font-bold pr-2">Ending Date:</label>
                  </div>
                  <div className="w-300">
                    <input
                      type="date"
                      id="endingDate"
                      placeholder="Insert here.."
                      className="p-2 w-300"
                      value={moment(props.user.userData.endingDate)
                        .add(1, "day")
                        .format("YYYY-MM-DD")}
                      onChange={e => {
                        let _value = e.target.value;
                        props.setUserData({
                          userData: props.user.userData,
                          key: e.target.id,
                          value: _value
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-2/4 uppercase">
                <div className="w-full pl-6 text-left mt-1 inline-flex flex items-center">
                  <div style={{ width: "100px" }} className="text-left">
                    <label className="font-bold pr-2">Email:</label>
                  </div>
                  <div className="w-300">
                    <input
                      type="text"
                      id="email"
                      required
                      placeholder="Required"
                      className="p-2 w-300"
                      value={props.user.userData.email}
                      onChange={e => {
                        let _value = e.target.value;
                        props.setUserData({
                          userData: props.user.userData,
                          key: e.target.id,
                          value: _value
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-grey-lighter p-1 py-2 mt-2 inline-flex flex items-top">
              <div className="mt-2">
                <label className="font-bold pl-5 pr-2 uppercase">
                  Job Description:
                </label>
              </div>
              <div>
                <textarea
                  cols="80"
                  rows="6"
                  className="pt-2 pl-2"
                  placeholder=""
                  id="jobDescription"
                  value={props.user.userData.jobDescription}
                  onChange={e => {
                    let _value = e.target.value;
                    props.setUserData({
                      userData: props.user.userData,
                      key: e.target.id,
                      value: _value
                    });
                  }}
                />
              </div>
            </div>
            <div className="w-full bg-grey-lighter p-1 py-2 mt-2 inline-flex flex items-top">
              <div className="mt-2">
                <label className="font-bold pl-5 pr-3 pr-2 uppercase">
                  Admin Notes:
                </label>
              </div>
              <div>
                <textarea
                  cols="80"
                  rows="6"
                  className="ml-6 pt-2 pl-2"
                  placeholder="Add here your notes..."
                  id="_adminNote"
                  onChange={e => {
                    let _value = e.target.value;
                    props.setUserData({
                      userData: props.user.userData,
                      key: e.target.id,
                      value: _value
                    });
                  }}
                />
              </div>
              <div className="w-10 h-10 flex items-center">
                <FontAwesomeIcon
                  onClick={() => {
                    document.querySelector("#_adminNote").value = "";
                    let adminNotes = props.user.userData.adminNotes || [];
                    let _new = props.user.userData._adminNote;
                    if (adminNotes.includes(_new) || _new == null) return;
                    props.setUserData({
                      userData: props.user.userData,
                      key: "adminNotes",
                      value: [...adminNotes, _new]
                    });
                  }}
                  icon={faPlus}
                  className="cursor-pointer text-grey ml-2 fa-lg hover:text-grey-new"
                />
              </div>
            </div>
            {showNotes()}

            <div className="w-full mt-2 bg-white h-24 relative">
              <button
                type="submit"
                className="w-200 mr-4 mb-2 h-10 p-2 pt-2 bg-orange-new text-white uppercase absolute pin-r pin-b cursor-pointer hover:bg-grey-light hover:text-black"
              >
                <h3>Save</h3>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
