import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function NewUserModal({ newUserShow, onHide, createNewUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");

  useEffect(() => {
    setUsername("");
    setPassword("");
    setPassword2("");
    setPasswordMatch("");
  }, [newUserShow]);

  useEffect(() => {
    if (password === password2) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password2]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
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
      <Modal.Body className="py-0">
        <h4 className="lead text-center display-6 mb-4" href="#">
          🙌 create account 🙌
        </h4>
        <p className="lead text-center my-0">
          Congratulations 🎉 on 👏 taking 🎉 your 👏 first 🎉 step 👏 to 🎉 300
          👏 IQ
        </p>
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
        <input
          type="password"
          className="form-control my-3"
          placeholder="enter your password again"
          value={password2}
          onChange={handlePassword2Change}
        ></input>
        {!passwordMatch && password2 && (
          <div className="alert alert-danger py-2 text-center" role="alert">
            Passwords do not match!
          </div>
        )}
        {passwordMatch && password2 && (
          <div className="alert alert-success py-2 text-center" role="alert">
            Passwords match!
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="modal-footer-style">
        <Button
          onClick={() => {
            if (passwordMatch) {
              createNewUser(username, password);
            }
          }}
        >
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
