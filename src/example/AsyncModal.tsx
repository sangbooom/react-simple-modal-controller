import React from "react";
import { modal } from "../lib/context/event";

const openAsyncModal = async () => {
  try {
    const isOk = await modal.openAsync<boolean>(AsyncModalComponent, {
      title: "test",
    });
    console.log({ isOk });
  } catch (error) {}
};

const AsyncModalButton = () => {
  return (
    <button className="modal-open-btn" onClick={openAsyncModal}>
      asyncOpen
    </button>
  );
};

export default AsyncModalButton;

const AsyncModalComponent = ({
  resolve,
  title,
}: {
  resolve: (value: boolean) => void;
  title: string;
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <button className="modal-open-btn" onClick={() => resolve(true)}>
          okay
        </button>
        <button className="modal-close-btn" onClick={() => resolve(false)}>
          cancel
        </button>
      </div>
    </div>
  );
};
