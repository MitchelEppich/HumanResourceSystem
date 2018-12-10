import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faTimes,
  faLock,
  faUserAlt,
  faUnlockAlt,
  faEdit,
  faUserAltSlash
} from "@fortawesome/free-solid-svg-icons";
import Permissions from "../Admin/Permissions"

import { Subscription } from "react-apollo";
import gql from "graphql-tag";

const UserViewer = props => {
    return (
        <div
            style={{
                position: "absolute",
                height: "823px",
                width: "99vw"
            }}
            className=""
            >
            
            
            <div
                style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                overflow: "hidden",
                background: "whitesmoke"
                }}
                className="w-newScreen bg-white z-50 h-650 mt-16 align-absolute"
            >
                <div className="w-full bg-grey-new text-center uppercase text-white p-2">
                <h3>All Users</h3>
                
                </div>
                <div className="inline-block w-full bg-white text-black">
                    <div
                        style={{ marginTop: "35px" }}
                        className="inline-flex w-full absolute pin-l pin-t p-1 bg-orange-new uppercase text-white text-sm">
                        <div style={{ width: "8%" }} className="pl-8">
                        ID
                        </div>
                        <div style={{ width: "22%" }} className="pl-8">
                        Name
                        </div>
                        <div style={{ width: "40%" }} className="pl-16">
                        Email
                        </div>
                        <div style={{ width: "20%" }} className="text-center">
                        Permissions
                        </div>
                        <div style={{ width: "10%" }} className="pl-8">
                        Action
                        </div>
                    </div>
                <div style={{ marginTop: "25px" }} className="w-full" />
                <div style={{ height: "590px" }} className="w-full">
                    {props.misc.visibleScreen.includes("permissions") ? (
                    <div className="w-full h-full relative justify-end"> 
                        
                            <Permissions {...props} />
                         
                    </div> ): null } 
                    <div className="inline-flex w-full flex items-center overflow-y-auto bg-grey-light p-1 mt-1">
                        <div style={{ width: "8%" }} className="pl-8">
                        1
                        </div>
                        <div style={{ width: "22%" }} className="pl-8">
                        Hololo Hakumba
                        </div>
                        <div style={{ width: "40%" }} className="pl-16">
                        hololo@gmail.com
                        </div>
                        <div style={{ width: "20%" }} className="text-center">
                            <div 
                            onClick={(e)=>{
                                e.preventDefault()                             
                                props.setVisibleScreen(
                                    props.misc.visibleScreen.includes("permissions")
                                      ? ["userViewer"]
                                      : ["permissions", "userViewer"]
                                  );
                            }}
                            className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-grey-light hover:text-black">
                                <FontAwesomeIcon icon={faEdit} className="fa-lg" /> 
                            </div>     
                            
                        </div>
                        <div style={{ width: "10%" }} className="pl-0 inline-flex">
                            <div className="w-10 h-10 p-2 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-grey-light hover:text-black">
                                <FontAwesomeIcon icon={faLock} className="fa-lg" />               
                            </div>
                            <div className="w-10 h-10 p-2 text-center hover:text-black text-red justify-center mx-auto align-center cursor-pointer hover:bg-grey-light">
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
