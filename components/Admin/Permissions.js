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

const Permissions = props => {
  let showPermissions = () => {
    let _user = props.nav.focusUser;
    let _permissions = _user.permissions;
    // Organize Systems
    let _indices = (() => {
      let arr = [];
      for (let _perm of _permissions) {
        let _client = _perm.substring(0, 3);
        arr.push(_client);
      }
      return arr;
    })();

    
    // Display System
    let arr = [];
    for (let _client in props.misc.clientSystems) {
      let _index = _indices.indexOf(_client);
      let perm = _permissions[_index];
      if (perm == null) {
        perm = `${_client}:0:0`;
        _index = _permissions.length;
        _permissions.push(perm);
      }
      
      let _break = perm.split(":");
      let _admin = _break[1] == "1";
      let _locked = _break[2] == "1";
      arr.push(
        <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
          <div className="w-3/5 text-left pl-4 uppercase">
            <h4>{props.misc.clientSystems[_break[0]]}</h4>
          </div>
          <div
            className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new"
            onClick={() => {
              _break[2] = _locked ? "0" : "1"; // Inverts
              _permissions[_index] = `${_break[0]}:${_break[1]}:${_break[2]}`;
              props.updateUser({
                username: _user.username,
                permissions: _permissions
              });
            }}
          >         
            <FontAwesomeIcon
            icon={_locked ? faToggleOn : faToggleOff}
            className="fa-2x"
            />     
          </div>
          {_user.username == props.user.currentUser.username && props.misc.clientSystems[_break[0]] == props.misc.clientSystems.HRS ? // Exclude lock button to HRS only for current user

          ( 
          <div className="w-10 h-10 justify-center mx-auto align-center">
            {' '}
          </div> 

          ) : (

          <div
            className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new"
            onClick={() => {
              _break[1] = _admin ? "0" : "1"; // Inverts
              _permissions[_index] = `${_break[0]}:${_break[1]}:${_break[2]}`;
              props.updateUser({
                username: _user.username,
                permissions: _permissions
              });
            }}
          >   
            <FontAwesomeIcon
              icon={_admin ? faToggleOn : faToggleOff}
              className="fa-2x"
            />                                 
        </div>   
          )} 
        </div>
      );
    }
    return arr;
  };

  return (
    <div
      style={{
        // boxShadow: "0px 1px 4px rgb(187, 187, 187)",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        overflow: "hidden",
        top: "60px"
      }}
      className="w-newScreen align-absolute bg-white text-center pin-auto"
    >
      <div className="inline-flex w-full bg-grey-new relative">
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
        <div className="w-full ">
          <h3 className="p-2 text-white uppercase">Permissions</h3>
        </div>
      </div>
      <div className="inline-flex w-full bg-orange-new text-white p-1">
        <div className="w-3/5 text-left pl-24 uppercase text-sm">Software</div>
        <div className="w-1/5 uppercase text-sm">Access</div>
        <div className="w-1/5 uppercase text-sm">Admin</div>
      </div>
      <div className="w-full h-650 overflow-y-auto">{showPermissions()}</div>
    </div>
  );
};

export default Permissions;
