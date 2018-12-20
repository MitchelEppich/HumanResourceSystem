import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faTimes,
  faLock,
  faEye,
  faGlobe,
  faUserAlt,
  faUnlockAlt,
  faEdit,
  faUserAltSlash,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import Permissions from "../Admin/Permissions";
import ViewUserDescription from "./ViewUserDescription";

import { Subscription } from "react-apollo";
import gql from "graphql-tag";

const UserViewer = props => {
  let showUsers = () => {
    if (props.user.promptUsers == null) return;
    let arr = [];    
    // let usersFiltered = props.user.promptUsers.filter(username => {
    //   if (username.username == props.user.currentUser.username) return false;
    //   return true })
    
      
    for (let user of props.user.promptUsers) {
      arr.push(
        <div
          key={arr}
          className="inline-flex w-full flex items-center overflow-y-auto bg-grey-lighter p-1 mt-1 capitalize"
        >
          <div style={{ width: "20%" }} className="pl-8">
            {user.name}
          </div>
          <div style={{ width: "10%" }} className="lowercase">
            {user.badge}
          </div>
          <div style={{ width: "30%" }} className="lowercase">
            {user.email}
          </div>
          <div style={{ width: "15%" }} className="text-center inline-flex">
            <div
              onClick={e => {
                e.preventDefault();
                props.setVisibleScreen(
                  props.misc.visibleScreen.includes("viewUserDescription")
                    ? ["userViewer"]
                    : ["viewUserDescription", "userViewer"]
                );
                props.setFocusUser({ user });
              }}
              className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new"
            >
              <FontAwesomeIcon icon={faEye} className="fa-lg" />
            </div>
            <div
              onClick={e => {
                e.preventDefault();
                props.setVisibleScreen(
                  props.misc.visibleScreen.includes("UpdateUser")
                    ? ["userViewer"]
                    : ["UpdateUser"]
                );
                props.setFocusUser({ user });
                props.setAllUserData({
                  focusUser: user
                });
              }}
              className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new"
            >
              <FontAwesomeIcon icon={faEdit} className="fa-lg" />
            </div>
          </div>
          <div style={{ width: "15%" }} className="text-center">
            <div
              onClick={e => {
                e.preventDefault();
                props.setVisibleScreen(
                  props.misc.visibleScreen.includes("permissions")
                    ? ["userViewer"]
                    : ["permissions", "userViewer"]
                );
                props.setFocusUser({ user });
              }}
              className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new"
            >
              <FontAwesomeIcon icon={faGlobe} className="fa-lg" />
            </div>
          </div>
          <div style={{ width: "10%" }} className="pl-0 inline-flex">  
          {/* Exclude lock button for current user */}
          {user.username == props.user.currentUser.username 
            ? 
              <div className="w-10 h-10 p-2 mx-auto align-center ">{" "}</div>
            : (
              <div className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                <FontAwesomeIcon icon={faLock} className="fa-lg" />
              </div>
            )}
            <div
              onClick={() => {
                props.deleteUser({
                  username: user.username,
                  promptUsers: props.user.promptUsers
                });
              }}
              className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new"
            >
              <FontAwesomeIcon icon={faTimes} className="fa-lg text-center" />
            </div>
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
      {props.misc.visibleScreen.includes("permissions") ? (
        <div
          style={{ zIndex: "99999", background: "white" }}
          className="w-full h-full absolute justify-end"
        >
          <Permissions {...props} />
        </div>
      ) : null}

      {props.misc.visibleScreen.includes("userDescription") ? (
        <div
          style={{ zIndex: "99999", background: "white" }}
          className="w-full h-full absolute justify-end"
        >
          <UserDescription {...props} />
        </div>
      ) : null}

      {props.misc.visibleScreen.includes("viewUserDescription") ? (
        <div
          style={{ zIndex: "99999", background: "white" }}
          className="w-full h-full absolute justify-end"
        >
          <ViewUserDescription {...props} />
        </div>
      ) : null}
      <div
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          overflow: "hidden"
        }}
        className="w-newScreen bg-white z-50 h-newScreen mt-16 align-absolute"
      >
        <div className="w-full bg-grey-new text-center uppercase text-white p-2">
          <h3>All Users</h3>
        </div>
        <div className="inline-block w-full bg-white text-black">
          <div
            style={{ marginTop: "35px" }}
            className="inline-flex w-full absolute pin-l pin-t p-1 bg-orange-new uppercase text-white text-sm"
          >
            <div style={{ width: "20%" }} className="pl-16">
              Name
            </div>
            <div style={{ width: "10%" }} className="">
              Badge
            </div>
            <div style={{ width: "30%" }} className="pl-16">
              Email
            </div>
            <div style={{ width: "15%" }} className="pl-2 text-center">
              User Description
            </div>
            <div style={{ width: "15%" }} className="text-center">
              Permissions
            </div>
            <div style={{ width: "10%" }} className="pl-8">
              Actions
            </div>
          </div>
          <div style={{ marginTop: "25px" }} className="w-full" />
          <div className="w-full h-650 overflow-y-auto">{showUsers()}</div>
        </div>
      </div>
      <Subscription subscription={subscription.userUpdate}>
        {({ data }) => {
          if (data != null) {
            let _user = data.userUpdate;
            let _promptUsers = props.user.promptUsers;
            if (!JSON.stringify(_promptUsers).includes(JSON.stringify(_user))) {
              props.modifyUser({
                user: _user,
                promptUsers: _promptUsers,
                focusUser: props.nav.focusUser
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
  userUpdate: gql`
    subscription {
      userUpdate {
        username
        badge
        name
        jobTitle
        permissions
        reportsTo
        startingDate
        endingDate
        phone
        email
        jobDescription
        adminNotes
        token
        createdAt
        online
        lastAction
      }
    }
  `
};

export default UserViewer;
