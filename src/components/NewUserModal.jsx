import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function NewUserModal({ newUserShow, onHide, createNewUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [newUserShow]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Modal
      show={newUserShow}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-header-style pb-0">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={onHide}
        ></button>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <h4 className="lead text-center display-6 mb-4" href="#">
          <b>💡 B R I L L I A N</b>
        </h4>
        <p className="lead text-center my-0">Your first step to 300 IQ</p>
        <input
          type="text"
          className="form-control my-3"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <input
          type="password"
          className="form-control my-3"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </Modal.Body>
      <Modal.Footer className="modal-footer-style">
        <Button
          onClick={() => {
            createNewUser(username, password);
          }}
        >
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
