import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faTimes, faInfo, faUserLock } from "@fortawesome/free-solid-svg-icons";

const Login = props => {
  return (
    <div
      className="bg-orange-new h-full w-full relative overflow-x-hidden overflow-y-hidden"
      style={{
        position: "fixed",
        zIndex: "10000"
      }}
    >
      <div
        style={{
          borderRadius: "10px"
        }}
        className="align-absolute bg-white w-450 h-450 mt-64"
      >
      <div 
      onClick={()=>{
        props.setVisibleScreen(null);
      }}
      className="absolute pin-r pin-t cursor-pointer mr-2 mt-2 p-2 hover:bg-grey-light hover:text-grey">
          <FontAwesomeIcon icon={faTimes} className="fa-2x" />
      </div>
        <div className="text-center p-2">
          <FontAwesomeIcon
            icon={faUserLock}
            className="fa-7x mt-12 mb-6 text-almost-transparent"
          />
          <h2 className="p-2">HR System</h2>
          <p>Please, enter with your login and password</p>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            const form = e.target;
            const formData = new window.FormData(form);

            let username = formData.get("username");
            let badge = formData.get("badge");

            // Verify login credentials
            props.verifyCredentials({ username, badge }).then(res => {
              if (res == null) return;
              props.setVisibleScreen(null);
            });
          }}
        >
          <div className="text-center">
            <div className="p-2 mt-8">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="p-2 w-2/3"
              />
            </div>
            <div className="p-2">
              <input
                type="text"
                name="badge"
                id="badge"
                placeholder="Badge #"
                className="p-2 w-2/3"
              />
            </div>
            <button
              type="submit"
              className="bg-grey-new text-white mt-2 p-2 text-center mx-auto w-2/3 justify-center cursor-pointer hover:bg-orange-new hover:text-grey uppercase"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
