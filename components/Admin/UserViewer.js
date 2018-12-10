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
import Permissions from "../Admin/Permissions"
import UserDescription from "./UserDescription";
import ViewUserDescription from "./ViewUserDescription";

import { Subscription } from "react-apollo";
import gql from "graphql-tag";


const UserViewer = props => {
    return (
        <div
            style={{
                position: "absolute",
                height: "820px",
                width: "99vw"
            }}           
            >
             {props.misc.visibleScreen.includes("permissions") ? (
                <div style={{zIndex: "99999"}} className="w-full h-full absolute justify-end"> 
                    <Permissions {...props} />                         
                </div> ): null } 

            {props.misc.visibleScreen.includes("userDescription") ? (
                <div style={{zIndex: "99999"}} className="w-full h-full absolute justify-end"> 
                    <UserDescription {...props} />                         
                </div> ): null }

            {props.misc.visibleScreen.includes("viewUserDescription") ? (
                <div style={{zIndex: "99999"}} className="w-full h-full absolute justify-end"> 
                    <ViewUserDescription {...props} />                         
                </div> ): null } 
            <div
            style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            overflow: "hidden",               
            }}
            className="w-newScreen bg-white z-50 h-newScreen mt-16 align-absolute"
            >
                <div className="w-full bg-grey-new text-center uppercase text-white p-2">
                    <h3>All Users</h3>                
                </div>
                <div className="inline-block w-full bg-white text-black">
                    <div
                        style={{ marginTop: "35px" }}
                        className="inline-flex w-full absolute pin-l pin-t p-1 bg-orange-new uppercase text-white text-sm">
                        <div style={{ width: "10%" }} className="pl-8">
                        ID
                        </div>
                        <div style={{ width: "20%" }} className="">
                        Name
                        </div>
                        <div style={{ width: "30%" }} className="">
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
                <div style={{ height: "590px" }} className="w-full">
                    <div className="inline-flex w-full flex items-center overflow-y-auto bg-grey-light p-1 mt-1 uppercase">
                        <div style={{ width: "10%" }} className="pl-8">
                        1
                        </div>
                        <div style={{ width: "20%" }} className="">
                        Test Tester
                        </div>
                        <div style={{ width: "30%" }} className="">
                        hololo@gmail.com
                        </div>
                        <div style={{ width: "15%" }} className="text-center inline-flex">
                            <div 
                            onClick={(e)=>{
                                e.preventDefault()                             
                                props.setVisibleScreen(
                                    props.misc.visibleScreen.includes("viewUserDescription")
                                      ? ["userViewer"]
                                      : ["viewUserDescription", "userViewer"]
                                  );
                            }}
                            className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faEye} className="fa-lg" /> 
                            </div>     
                            <div 
                            onClick={(e)=>{
                                e.preventDefault()                             
                                props.setVisibleScreen(
                                    props.misc.visibleScreen.includes("userDescription")
                                      ? ["userViewer"]
                                      : ["userDescription", "userViewer"]
                                  );
                            }}
                            className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faEdit} className="fa-lg" /> 
                            </div> 
                        </div>
                        <div style={{ width: "15%" }} className="text-center">
                            <div 
                            onClick={(e)=>{
                                e.preventDefault()                             
                                props.setVisibleScreen(
                                    props.misc.visibleScreen.includes("permissions")
                                      ? ["userViewer"]
                                      : ["permissions", "userViewer"]
                                  );
                            }}
                            className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faGlobe} className="fa-lg" /> 
                            </div> 
                        </div>
                        <div style={{ width: "10%" }} className="pl-0 inline-flex">
                            <div className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faLock} className="fa-lg" /> 
                            </div>
                            <div className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faTimes} className="fa-lg text-center" />
                            </div>
                        </div>
                    </div> 

                    <div className="inline-flex w-full flex items-center overflow-y-auto bg-grey-light p-1 mt-1 uppercase">
                        <div style={{ width: "10%" }} className="pl-8">
                        2
                        </div>
                        <div style={{ width: "20%" }} className="">
                        tetetete tete
                        </div>
                        <div style={{ width: "30%" }} className="">
                        tetete@gmail.com
                        </div>
                        <div style={{ width: "15%" }} className="text-center inline-flex">
                            <div 
                            onClick={(e)=>{
                                e.preventDefault()                             
                                props.setVisibleScreen(
                                    props.misc.visibleScreen.includes("viewUserDescription")
                                      ? ["userViewer"]
                                      : ["viewUserDescription", "userViewer"]
                                  );
                            }}
                            className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faEye} className="fa-lg" /> 
                            </div>     
                            <div 
                            onClick={(e)=>{
                                e.preventDefault()                             
                                props.setVisibleScreen(
                                    props.misc.visibleScreen.includes("userDescription")
                                      ? ["userViewer"]
                                      : ["userDescription", "userViewer"]
                                  );
                            }}
                            className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faEdit} className="fa-lg" /> 
                            </div> 
                        </div>
                        <div style={{ width: "15%" }} className="text-center">
                            <div 
                            onClick={(e)=>{
                                e.preventDefault()                             
                                props.setVisibleScreen(
                                    props.misc.visibleScreen.includes("permissions")
                                      ? ["userViewer"]
                                      : ["permissions", "userViewer"]
                                  );
                            }}
                            className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faGlobe} className="fa-lg" /> 
                            </div> 
                        </div>
                        <div style={{ width: "10%" }} className="pl-0 inline-flex">
                            <div className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faLock} className="fa-lg" />               
                            </div>
                            <div className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                                <FontAwesomeIcon icon={faTimes} className="fa-lg text-center" />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>                
        </div>
    </div>
    )
};

export default UserViewer;
