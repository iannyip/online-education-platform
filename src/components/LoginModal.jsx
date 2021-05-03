import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function LoginModal({ loginShow, onHide }) {
  console.log("inside modal");
  return (
    <Modal
      show={loginShow}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-header-style my-0">
        {/* <Modal.Title
          id="contained-modal-title-vcenter"
          className="lead text-center w-100"
        >
          Welcome back
        </Modal.Title> */}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={onHide}
        ></button>
      </Modal.Header>
      <Modal.Body>
        <h4 className="lead text-center display-6 mb-4" href="#">
          <b>[ ] B R I L L I A N</b>
        </h4>
        <p className="lead text-center my-0">welcome back</p>
        <input
          type="text"
          className="form-control my-3"
          placeholder="username"
        ></input>
        <input
          type="password"
          className="form-control my-3"
          placeholder="password"
        ></input>
      </Modal.Body>
      <Modal.Footer className="modal-footer-style">
        <Button>Login</Button>
      </Modal.Footer>
    </Modal>
  );
}
