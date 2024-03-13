import React from "react"
import { createPortal } from "react-dom"
import styles from "../sass/Modal.module.scss"

export const Modal = ({ onClose, showModal, children }) => {
  return (
    <>
      {showModal &&
        createPortal(
          <div id="myModal" className={styles.modal}>
            <div className={styles.modalContent}>
              <button onClick={onClose}>
                <span className={styles.close}>&times;</span>
              </button>
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
