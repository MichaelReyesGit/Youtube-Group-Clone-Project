import React from "react";

function Modal({ setModal }) {
  return (
    <div>
      <div
        className="modal fade show"
        id="exampleModal"
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLiveLabel"
        // aria-hidden="true"
        aria-modal="true"
        role="dialog"
        style={{ display: "block" }} // Set the display style to 'block'
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Search Error
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>There was an error. Please try again</p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="modal-backdrop fade show"></div>
    </div>
  );
}

export default Modal;
