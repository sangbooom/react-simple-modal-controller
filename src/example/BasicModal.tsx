import React from "react";
import { modal } from "../lib/context/event";

const openModal = () => {
  modal.open(ModalComponent, { title: "test" });
};

const BasicModalButton = () => {
  return (
    <button className="modal-open-btn" onClick={openModal}>
      open
    </button>
  );
};

export default BasicModalButton;

const ModalComponent = ({ title }: { title: string }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <button className="modal-open-btn" onClick={modal.close}>
          ok
        </button>
        <button className="modal-close-btn" onClick={modal.close}>
          cancel
        </button>
        <button className="modal-open-btn" onClick={openModal}>
          nesting modal open
        </button>
      </div>
    </div>
  );
};
