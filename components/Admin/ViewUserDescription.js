import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTimes,
  faEye,
  faAngleLeft,
  faToggleOff,
  faStickyNote,
  faPrint,
  faToggleOn
} from "@fortawesome/free-solid-svg-icons";

let print = () => {
  window.print();
};

import moment from "moment"

const ViewUserDescription = props => {
  // let viewUserFile = document.querySelector("#viewUser")
  // console.log(viewUserFile)
  let _user = props.nav.focusUser;
  if (_user == null) return <div />;
  return (
    <div
      id="viewUser"
      style={{
        boxShadow: "0px 1px 4px rgb(187, 187, 187)",
        borderRadius: "10px",
        overflow: "hidden",
        top: "60px"
      }}
      className="w-newScreen align-absolute bg-white text-center pin-auto"
    >
      <div
        style={{
          overflow: "hidden",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px"
        }}
        className="inline-flex w-full bg-grey-new relative"
      >
        <div
          onClick={() => {
            props.setVisibleScreen("userViewer");
          }}
          className="w-100 h-10 inline-flex absolute"
        >
          <h4 className="p-2 text-white uppercase text-lg bg-orange-new flex items-center hover:bg-semi-transparent text-grey cursor-pointer">
            <FontAwesomeIcon icon={faAngleLeft} className="fa-2x mr-4" />
            Back
          </h4>
        </div>
        <div className="w-full">
          <h3 className="p-2 text-center text-white uppercase">
            View User Description
          </h3>
        </div>
        <div className="text-white h-full text-right bg-grey-new uppercase absolute pin-t pin-r">
          <span
            onClick={() => {
              window.print();
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
            <FontAwesomeIcon icon={faPrint} />
          </span>
        </div>
      </div>

      <div className="w-full overflow-y-auto">
        <div className="inline-flex w-full bg-grey-lighter py-2 text-grey p-1 mt-4 flex items-center">
          <div className="w-2/4 uppercase">
            <div className="w-full pl-6 text-left inline-flex flex items-center">
              <div style={{ width: "135px" }} className="text-left">
                <label className="font-bold pr-2">Name User:</label>
              </div>
              <div className="w-300">
                <p className="p-2 capitalize">{_user.name}</p>
              </div>
            </div>
          </div>
          <div className="w-2/4 uppercase">
            <div className="w-full pl-6 text-left inline-flex flex items-center">
              <label className="font-bold pr-2">Reports to:</label>
              <p className="p-2 capitalize">{_user.reportsTo}</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-2 p-1 pb-2 bg-grey-lighter">
          <div className="w-full pl-6 mt-2 inline-flex flex items-center">
            <div style={{ width: "135px" }} className="text-left">
              <label className="font-bold pr-2 text-left uppercase">
                Job Title:
              </label>
            </div>
            <div className="w-550 inline-flex flex items-center">
              <p className="p-2 capitalize">
                {_user.jobTitle ? _user.jobTitle.toString() : "No Title"}
              </p>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full bg-grey-lighter text-grey p-1 mt-2 flex items-center">
          <div className="w-2/4 uppercase pt-2 pb-2">
            <div className="w-full pl-6 text-left inline-flex flex items-center">
              <div style={{ width: "135px" }} className="text-left">
                <label className="font-bold pr-2">Starting Date:</label>
              </div>
              <div className="w-300">
                <p className="p-2 uppercase">{moment(_user.startingDate).format("DD/MM/YYYY")}</p>
              </div>
            </div>
            <div className="w-full pl-6 text-left mt-4 inline-flex flex items-center">
              <div style={{ width: "135px" }} className="text-left">
                <label className="font-bold pr-2">Ending Date:</label>
              </div>
              <div className="w-300">
                <p className="p-2 capitalize">
                  {moment(_user.startingDate).format("DD/MM/YYYY") || "Still Working"}
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/4 uppercase">
            <div className="w-full pl-6 text-left inline-flex flex items-center">
              <div style={{ width: "100px" }} className="text-left">
                <label className="font-bold pr-2">Phone #:</label>
              </div>
              <div className="w-300">
                <p className="p-2 capitalize">{_user.phone}</p>
              </div>
            </div>
            <div className="w-full pl-6 text-left mt-4 inline-flex flex items-center">
              <div style={{ width: "100px" }} className="text-left">
                <label className="font-bold pr-2">Email:</label>
              </div>
              <div className="w-300">
                <p className="p-2 lowercase">{_user.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-grey-lighter p-1 py-2 mt-2 inline-flex flex items-top">
          <div style={{ width: "160px" }} className="text-left mt-2">
            <label className="font-bold pl-5 pr-2 uppercase">
              Job Description:
            </label>
          </div>
          <p style={{
                width: "900px",
                textAlign: "justify",

          }} className="p-2 text-left w-750">
            {_user.jobDescription || "No Description"}
          </p>
        </div>
        <div className="w-full bg-grey-lighter p-1 py-2 mt-2 inline-flex flex items-top">
          <div style={{ width: "160px" }} className="text-left mt-2">
            <label className="font-bold pl-5 pr-3 pr-2 uppercase">
              Admin Notes:
            </label>
          </div>
          <p style={{
                width: "900px",
                textAlign: "justify",
          }} className="p-2 text-left w-750">
            {/* {_user.adminNotes ? _user.adminNotes.toString() : "No Notes"} */}
            {props.user.userData._adminNote ? props.user.userData._adminNote.toString() : "No Notes"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewUserDescription;
