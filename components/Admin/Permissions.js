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
        <div className="w-550 h-400 align-absolute bg-grey-lighter text-center pin-auto">
            <div className="inline-flex w-full bg-orange-new">
                <div
                onClick={() => {
                    props.setVisibleScreen("viewUser");                    
                }}
                className="w-100 h-10 inline-flex"
                >
                <h4 className="p-2 text-white uppercase text-lg bg-grey-new flex items-center hover:bg-semi-transparent text-grey cursor-pointer">
                    <FontAwesomeIcon icon={faAngleLeft} className="fa-2x mr-4" />
                    Back
                </h4>
                </div>
                <div className="w-2/3 ">
                    <h3 className="p-2 text-white uppercase">Permissions</h3>
                </div>                
            </div>
            <div className="inline-flex w-full bg-grey-new text-white p-1">
                <div className="w-3/5 uppercase text-sm">Software</div>
                <div className="w-1/5 uppercase text-sm">Access</div>
                <div className="w-1/5 uppercase text-sm">Admin</div>
            </div>
            <div className="inline-flex w-full bg-white text-grey p-1 flex items-center">
                <div className="w-3/5 uppercase">Package Fulfillment System</div>
                <div className="w-12 h-10 p-1 text-center bg-grey-lighter text-grey justify-center mx-auto align-center cursor-pointer hover:bg-grey-light hover:text-black">
                    <FontAwesomeIcon icon={faToggleOff} className="fa-2x"/>
                </div>
                <div className="w-12 h-10 p-1 text-center bg-grey-lighter text-grey justify-center mx-auto align-center cursor-pointer hover:bg-grey-light hover:text-black">
                    <FontAwesomeIcon icon={faToggleOn} className="fa-2x"/>
                </div>
            </div>
        </div>
    )
}

export default Permissions