import React from "react";

import moment from "moment";

const Notes = props => {
  let _complaint = props.complaint;
  if (_complaint == null) return null;

  let showNotes = () => {
    let arr = [];
    let _notes = props.nav.focusComplaint.notes;
    if (_notes == null) return null;
    for (let note of _notes) {
      let _content = note.split("//&");
      arr.push(
        <div className="inline-flex w-full p-2 bg-grey-light flex items-center mt-1">
          <div className="w-1/5 text-left pl-2 uppercase">{_content[0]}</div>
          <div className="w-3/5 text-left capitalize">{_content[1]}</div>
          <div className="w-1/5 text-left pl-0 text-sm">
            {moment(_content[2]).format("DD/MM/YY - hh:mm")}
          </div>
        </div>
      );
    }

    return arr;
  };

  return (
    <div
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        zIndex: "100",
        marginRight: "5px",
        boxShadow: "0px 1px 4px rgb(187, 187, 187)",
      }}
      className="absolute bg-white pin-r pin-t w-550 h-550 mt-10"
    >
      <div className="text-white p-2 text-center uppercase bg-orange-new">
        <h3>Notes</h3>
      </div>
      <div className="w-full mt-6 py-2 h-300 overflow-y-auto">
        <div
          style={{ marginTop: "35px" }}
          className="inline-flex w-full absolute pin-l pin-t p-1 bg-grey-new uppercase text-white text-sm"
        >
          <div className="w-1/5 pl-8 text-left">User</div>
          <div className="w-3/5 text-left">Message</div>
          <div className="w-1/5 text-center">Date</div>
        </div>

        <div className="w-full mt-1">{showNotes()}</div>
      </div>
      <div className="w-full h-200 mt-4 p-2">
        <div className="w-full px-8">
          <textarea
            style={{ border: "2px solid #cecece" }}
            rows="5"
            cols="40"
            className="w-full mr-2"
            id="noteEntry"
          />
        </div>
        <div
          className="w-full px-8"
          onClick={() => {
            let _noteEntry = document.querySelector("#noteEntry").value;
            document.querySelector("#noteEntry").value = "";
            props.updateComplaint({
              note: `${
                props.user.currentUser.username
              }//&${_noteEntry}//&${new Date()}`,
              focusComplaint: _complaint
            });
          }}
        >
          <div className="bg-grey-new cursor-pointer p-2 text-white text-center uppercase hover:bg-orange-new hover:text-grey">
            Send
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
