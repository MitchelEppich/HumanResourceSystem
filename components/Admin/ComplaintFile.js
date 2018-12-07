import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleDown,
  faStickyNote,
  faTimes,
  faReply
} from "@fortawesome/free-solid-svg-icons";
import Notes from "../Admin/Notes";

const ComplaintFile = props => {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "99vw"
      }}
      className=""
    >
      <div
        style={{
          borderRadius: "10px",
          height: "116vh",
          zIndex: "100",
          border: "2px solid #f1f1f1"
        }}
        className="w-newScreen align-absolute mx-auto absolute mt-16 bg-white pin-auto h-full"
      >
        <div
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
          className="inline-flex bg-grey-new w-full flex items-center overflow-hidden"
        >
          <div
            onClick={() => {
              props.setVisibleScreen("admin");
            }}
            className="w-1/3 h-10 inline-flex bg-grey-new"
          >
            <h4 className="p-2 text-white uppercase text-lg bg-orange-new flex items-center hover:bg-semi-transparent text-grey cursor-pointer">
              <FontAwesomeIcon icon={faAngleLeft} className="fa-2x mr-4" />
              Back
            </h4>
          </div>
          <div className="text-white p-2 w-1/3 text-center bg-grey-new uppercase ">
            <h3 className="">Complaint #001</h3>
          </div>
          <div className="text-white h-10 w-1/3 text-right bg-grey-new uppercase ">
            <span
              onClick={() => {
                props.setVisibleScreen(
                  props.misc.visibleScreen.includes("noteBy")
                    ? ["complainFile", "admin"]
                    : ["noteBy", "complainFile", "admin"]
                );
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
              <FontAwesomeIcon icon={faStickyNote} />
            </span>
          </div>
        </div>
        <div className="w-full mt-4 py-2 px-6 overflow-y-auto">
          <div
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
            className="w-full bg-grey-new-light uppercase text-white text-center p-2"
          >
            <h4>Reporter by:</h4>
          </div>
          <div className="w-full mt-1">
            <div className="inline-flex w-full mt-1 flex py-3 bg-grey-lighter">
              <div className="w-1/3 text-left pl-4 ">
                <p className="uppercase font-bold">
                  Name: <span className="pl-2 font-normal"> Johnny Bravo</span>
                </p>
              </div>
              <div className="w-1/3 text-left pl-4">
                <p className="uppercase font-bold">
                  Email:{" "}
                  <span className="pl-2 font-normal"> jhowdoe@gmail.com</span>
                </p>
              </div>
              <div className="w-1/3 text-left pl-4">
                <p className="uppercase font-bold">
                  Submitted on:{" "}
                  <span className="pl-2 font-normal">
                    {" "}
                    04/12/2018 - 15:12:33
                  </span>
                </p>
              </div>
            </div>
          </div>
          {props.misc.visibleScreen.includes("noteBy") ? (
            <Notes {...props} />
          ) : null}

          <div className="w-full mt-4 py-2 px-6 overflow-y-auto">
            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
              className="w-full bg-grey-new-light uppercase text-white text-center p-2"
            >
              <h4>Reported:</h4>
            </div>
            <div className="w-full mt-1">
              <div className="inline-flex w-full flex mt-1 py-3 bg-grey-lighter">
                <div className="w-1/3 text-left pl-4 ">
                  <p className="uppercase font-bold">
                    Date: <span className="pl-2 font-normal"> 01/12/2018</span>
                  </p>
                </div>
                <div className="w-1/3 text-left pl-4">
                  <p className="uppercase font-bold">
                    Hour:{" "}
                    <span className="pl-2 font-normal"> not informed </span>
                  </p>
                </div>
                <div className="w-1/3 text-left pl-4">
                  <p className="uppercase font-bold">
                    Location:{" "}
                    <span className="pl-2 font-normal"> CSR Depart.</span>
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full flex py-3  mt-2 bg-grey-lighter">
                <div className="w-1/3 text-left pl-4 ">
                  <p className="uppercase font-bold">
                    Reported Parties:{" "}
                    <span className="pl-2 font-normal"> Mitchel Eppich</span>
                  </p>
                </div>
                <div className="w-1/3 text-left pl-4">
                  <p className="uppercase font-bold">
                    Witnesses:{" "}
                    <span className="pl-2 font-normal"> Jhowdoe </span>
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full flex py-3  mt-2 bg-grey-lighter">
                <div className="w-full text-left px-4 inline-flex">
                  <div className="w-32">
                    <p className="uppercase font-bold">Description:</p>
                  </div>
                  <div
                    style={{ height: "110px" }}
                    className="w-full  overflow-y-auto"
                  >
                    <p className="font-normal text-justify px-4">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus. Temporibus autem quibusdam
                      et aut officiis debitis aut rerum necessitatibus saepe
                      eveniet ut et voluptates repudiandae sint et molestiae non
                      recusandae.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-2 mt-4 px-6 overflow-y-auto">
            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
              className="w-full bg-grey-new-light uppercase text-white text-center p-2"
            >
              <h4>Additional Information:</h4>
            </div>
            <div className="inline-flex w-full flex py-3 mt-2 bg-grey-lighter">
              <div className="w-full text-left px-4 inline-flex">
                <div className="w-32">
                  <p className="uppercase font-bold">Description:</p>
                </div>
                <div
                  style={{ height: "110px" }}
                  className="w-full overflow-y-auto"
                >
                  <p className="font-normal text-justify px-4">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus. Temporibus autem quibusdam et aut
                    officiis debitis aut rerum necessitatibus saepe eveniet ut
                    et voluptates repudiandae sint et molestiae non recusandae.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-2 mt-4 px-6 overflow-y-auto">
            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
              className="w-full bg-grey-new-light uppercase text-white text-center p-2"
            >
              <h4>Proposed Action:</h4>
            </div>
            <div className="inline-flex w-full flex py-3 mt-2 bg-grey-lighter">
              <div className="w-full text-left px-4 inline-flex">
                <div className="w-32">
                  <p className="uppercase font-bold">Description:</p>
                </div>
                <div
                  style={{ height: "110px" }}
                  className="w-full overflow-y-auto"
                >
                  <p className="font-normal text-justify px-4">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus. Temporibus autem quibusdam et aut
                    officiis debitis aut rerum necessitatibus saepe eveniet ut
                    et voluptates repudiandae sint et molestiae non recusandae.
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-2 mt-4 px-6 overflow-y-auto">
            <div
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
              className="w-full bg-grey-new-light uppercase text-white text-center p-2"
            >
              <h4>Admin Actions:</h4>
            </div>
            <div className="text-grey p-2 flex justify-end items-center w-full inline-flex bg-grey-light uppercase mt-2">
              <p className="pl-2 font-bold">Status:</p>
              <select className="w-100 ml-4">
                <option value="processed">Processed</option>
                <option value="awaiting">Awaiting</option>
                <option value="analysis">In analysis</option>
              </select>
            </div>
            <div className="w-full pin-b h-200 mt-4 py-2">
              <div className="w-full">
                <textarea
                  style={{ border: "2px solid #cecece" }}
                  rows="5"
                  cols="40"
                  className="w-full mr-2"
                />
              </div>
              <div className="w-full mt-2">
                <div className="bg-orange-new p-2 text-grey text-center uppercase hover:bg-grey-new hover:text-white cursor-pointer text-lg font-bold">
                  Send Message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintFile;
