import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function LoginModal({
  loginShow,
  onHide,
  loginReq,
  showNewUserModal,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [loginShow]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Modal
      show={loginShow}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-header-style pb-0">
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
      <Modal.Body className="py-0">
        <h4 className="lead text-center display-6 mb-4" href="#">
          <b>💡 B R I L L I A N</b>
        </h4>
        <p className="lead text-center my-0">welcome back</p>
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
        <div className="col-12">
          <Button
            onClick={() => {
              loginReq(username, password);
            }}
          >
            Login
          </Button>
        </div>

        <p className="text-center my-1">
          <a
            href="#"
            className="disclaimer-row"
            onClick={() => {
              onHide();
              showNewUserModal();
            }}
          >
            New? Create an account
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}
