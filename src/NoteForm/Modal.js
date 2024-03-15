import React from "react";
import { createPortal } from "react-dom";
import Modal from "react-bootstrap/Modal";
import styles from "../sass/Modal.module.scss";
import Button from "react-bootstrap/Button";

export const FormModal = ({ title, onClose, showModal, submit, reset, children }) => {
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={reset}>
          Clear
        </Button>
        <Button variant="primary" onClick={submit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
