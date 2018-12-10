import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faInfo,
  faSyncAlt,
  faTimes,
  faCheckDouble
} from "@fortawesome/free-solid-svg-icons";


const Navbar = props => {
return (
<div className="bg-orange-new w-full mx-auto inline-flex justify-center text-grey">
<div className="w-newScreen inline-flex ml-6 mt-4 flex justify-between mb-2">
  <div className="w-2/5 mt-2 pin-l text-left">
    <a href="./">
      <h1 className="text-grey uppercase p-2">HR System</h1>
    </a>
    <p className="p-3 ">Welcome User, please fill the form below:</p>
  </div>
  <div className="w-3/5 mt-6 text-right mr-4">
  {props.user.currentUser == null ? (
    <a
      onClick={() => {         
        props.setVisibleScreen([
          props.misc.visibleScreen != null &&
          props.misc.visibleScreen.includes("login")
            ? "admin"
            : "login"
        ]);
      }}
      className="text-white p-2 bg-grey-new unselectable font-bold uppercase cursor-pointer px-4 hover:bg-white hover:text-grey-new mr-2"
    >
      Admin Panel
  </a>) : null}  
    
    {props.user.currentUser != null ? (
      <span>          
      <a
        href="./"
        className="text-white mr-2 p-2 bg-grey-new unselectable font-bold uppercase cursor-pointer px-4 hover:bg-white hover:text-grey-new"
      >
        Home
      </a>

      <a
      onClick={() => {         
        props.setVisibleScreen([
          props.misc.visibleScreen != null &&
          props.misc.visibleScreen.includes("admin")
            ? "admin"
            : "admin"
        ]);
      }}
      className={`p-2  unselectable font-bold uppercase cursor-pointer px-4 hover:bg-white hover:text-grey-new mr-2 ${!props.misc.visibleScreen.includes("admin") ? "bg-grey-new text-white" : "bg-white text-grey-new" } `}
        >
      All Complaints
        </a>

      <a
        onClick={() => {   
          props.setVisibleScreen([
            props.misc.visibleScreen != null &&
            props.misc.visibleScreen.includes("userViewer")
              ? "userViewer"
              : "userViewer"
          ]);
        }}
        className={`p-2  unselectable font-bold uppercase cursor-pointer px-4 hover:bg-white hover:text-grey-new mr-2 ${!props.misc.visibleScreen.includes("userViewer") ? "bg-grey-new text-white" : "bg-white text-grey-new" } `}
      >
        Users
      </a>
     
      <a
        onClick={() => {
          
          props.releaseCredentials({
            username: props.user.currentUser.username
          });
          props.setVisibleScreen([
            props.misc.visibleScreen != null &&
            props.misc.visibleScreen.includes("login")
              ? null
              : "login"
          ]);
        }}
        className="text-white p-2 bg-grey-new unselectable font-bold uppercase cursor-pointer px-4 hover:bg-white hover:text-grey-new"
      >
        Logout
      </a>
      </span>) : null}
  </div>
</div>
</div>)
}

export default Navbar