import React from "react";
import { Toast as ToastBS } from "react-bootstrap";

export const Toast = ({ variant, message, title, show, onClose }) => {
  return (
    <ToastBS show={show} onClose={onClose} className="d-inline-block m-1" bg={variant}>
      <ToastBS.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{title}</strong>
        {/* <small>11 mins ago</small> */}
      </ToastBS.Header>
      <ToastBS.Body className={variant === "Dark" && "text-white"}>{message}</ToastBS.Body>
    </ToastBS>
  );
};
