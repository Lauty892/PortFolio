import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./customModal.css";

const CustomModal = ({ isOpen, closeModal, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (event) => {
        if (event.target.className === "modal-overlay") {
          closeModal();
        }
      };

      window.addEventListener("click", handleOutsideClick);

      return () => {
        window.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">{React.cloneElement(children, { closeModal })}</div>
      </div>
    </div>,
    document.body
  );
};

export default CustomModal;