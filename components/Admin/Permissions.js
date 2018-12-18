import React from "react"
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
    return (
        <div style={{
            // boxShadow: "0px 1px 4px rgb(187, 187, 187)",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            overflow: "hidden",
            top: "60px"
            }} 
            className="w-newScreen align-absolute bg-white text-center pin-auto">
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
                <div className="w-3/5 uppercase text-sm">Software</div>
                <div className="w-1/5 uppercase text-sm">Access</div>
                <div className="w-1/5 uppercase text-sm">Admin</div>
            </div>
            <div className="w-full h-650 overflow-y-auto">
                <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
                    <div className="w-3/5 text-left pl-4 uppercase">
                        <h4>Package Fulfillment System</h4>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOff} className="fa-2x"/>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                </div>
                <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
                    <div className="w-3/5 text-left pl-4 uppercase">
                        <h4>Package Fulfillment System</h4>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOff} className="fa-2x"/>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                </div>
                <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
                    <div className="w-3/5 text-left pl-4 uppercase">
                        <h4>Package Fulfillment System</h4>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOff} className="fa-2x"/>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                </div>
                <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
                    <div className="w-3/5 text-left pl-4 uppercase">
                        <h4>Package Fulfillment System</h4>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOff} className="fa-2x"/>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                </div>
                <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
                    <div className="w-3/5 text-left pl-4 uppercase">
                        <h4>Package Fulfillment System</h4>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOff} className="fa-2x"/>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                </div>
                <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
                    <div className="w-3/5 text-left pl-4 uppercase">
                        <h4>Package Fulfillment System</h4>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOff} className="fa-2x"/>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                </div>
                <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
                    <div className="w-3/5 text-left pl-4 uppercase">
                        <h4>Package Fulfillment System</h4>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOff} className="fa-2x"/>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                </div>
                <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
                    <div className="w-3/5 text-left pl-4 uppercase">
                        <h4>Human Resources System</h4>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                </div>
                <div className="mt-2 inline-flex w-full bg-grey-light text-grey p-1 flex items-center">
                    <div className="w-3/5 text-left pl-4 uppercase">
                        <h4>Time Keeping System</h4>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                    </div>
                    <div className="w-10 h-10 p-1 text-center text-grey justify-center mx-auto align-center cursor-pointer hover:bg-semi-transparent hover:text-grey-new">
                        <FontAwesomeIcon icon={faToggleOff} className="fa-2x"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Permissions