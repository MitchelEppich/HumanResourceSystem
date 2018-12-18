import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTimes,
  faEye,
  faAngleLeft,
  faToggleOff,
  faToggleOn
} from "@fortawesome/free-solid-svg-icons";

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
    if (props.user.userData.adminNotes == null) return;
    let arr = [];
    for (let note of props.user.userData.adminNotes) {
      arr.push(
        <div className="w-full p-2 mt-2 bg-grey-lighter">
          <div
            style={{ width: "50%" }}
            className="p-2 bg-grey-lighter text-grey mt-1 inline-flex flex items-center text-justify  hover:bg-grey-lightest hover:text-grey-new cursor-pointer mr-2"
          >
            <p className="px-4 text-left">{note}</p>
            <FontAwesomeIcon
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
        boxShadow: "0px 1px 4px rgb(187, 187, 187)",
        borderRadius: "10px",
        overflow: "hidden",
        top: "180px"
      }}
      className="w-newScreen align-absolute bg-white text-center pin-auto"
    >
      <div
        style={{
          overflow: "hidden",
          borderTopLeftRadius: "11px",
          borderTopRightRadius: "11px"
        }}
        className="inline-flex w-full bg-grey-new relative"
      >
        <div
          onClick={() => {
            props.setVisibleScreen("userViewer");
          }}
          className="w-100 h-full inline-flex absolute"
        >
          <h4 className="p-2 text-white uppercase text-lg bg-orange-new flex items-center hover:bg-semi-transparent text-grey cursor-pointer">
            <FontAwesomeIcon icon={faAngleLeft} className="fa-2x mr-4" />
            Back
          </h4>
        </div>
        <div className="w-full">
          <h3 className="p-2 text-center text-white uppercase">
            Register New User{" "}
          </h3>
        </div>
      </div>
      <form 
        onSubmit={() => {
          props.registerCredentials(props.user.userData);
          
          
        }}
      >
      <div className="w-full h-650 bg-grey-lighter overflow-y-auto">
      
        <div className="inline-flex w-full bg-grey-lighter py-2 text-grey p-1 mt-4 flex items-center">
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
                className="w-300 p-1 pt-2 "
                id="reportsTo"
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
                  Select here...
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
                placeholder="Add here.."
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
            <div className="w-full pl-6 text-left mt-4 inline-flex flex items-center">
              <div style={{ width: "135px" }} className="text-left">
                <label className="font-bold pr-2">Ending Date:</label>
              </div>
              <div className="w-300">
                <input
                  type="date"
                  id="endingDate"
                  placeholder="Insert here.."
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
                  placeholder="Optional"
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
              </div>
            </div>
            <div className="w-full pl-6 text-left mt-4 inline-flex flex items-center">
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
              placeholder="Optional"
              id="jobDescription"
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
       
        <div           
          className="w-full mt-2 bg-grey-lighter h-24 relative"
          
        >
          <button 
          type="submit"
          className="w-200 mr-4 mb-2 h-10 p-2 pt-2 bg-orange-new text-white uppercase absolute pin-r pin-b cursor-pointer hover:bg-grey-light hover:text-black">
            <h3>Save</h3>
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default RegisterUser;
