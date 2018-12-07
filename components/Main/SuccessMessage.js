import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const SuccessMessage = props => {
    return (        
        <div
        style={{
            zIndex: "9999",                   
            boxShadow: "rgba(140, 140, 140, 0.42) 0px 0px 6px"
        }}
        className="absolute align-absolute mt-64 pin-auto bg-grey-light w-400 h-300"
        >
        <div
            onClick={() => {
            props.setVisibleScreen([
                props.misc.visibleScreen.includes(null)
            ]);
            }}
            className="w-10 h-10 mr-1 mt-1 pt-1 absolute text-grey-new cursor-pointer pin-t pin-r text-center bg-white hover:text-white hover:bg-grey-new "
        >
            <FontAwesomeIcon icon={faTimes} className="fa-2x " />
        </div>
        <div className="mt-24 text-center">
            <FontAwesomeIcon
            icon={faCheckDouble}
            className="fa-5x text-grey-new"
            />
        </div>
        <div className="mt-12">
            <h2 className="text-center text-grey-new">
            Thank you for your report!
            </h2>
        </div>
        </div>            
    )
}

export default SuccessMessage