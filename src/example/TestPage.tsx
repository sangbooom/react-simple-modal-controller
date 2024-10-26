import React from "react";
import { modal } from "../lib/context/event";
import { ModalResolver } from "../lib/types/modal";

const openModal = () => {
  modal.open(TestModal, { title: "test" });
};

const openAsyncModal = async () => {
  try {
    const res = await modal.openAsync<string>(TestAsyncModal, {
      title: "test",
    });
    console.log({ res });
  } catch (error) {
    console.log({ error });
  }
};

const TestPage = () => {
  return (
    <div className="app">
      <button className="open-modal-btn" onClick={openModal}>
        동기 모달
      </button>
      <button className="open-modal-btn" onClick={openAsyncModal}>
        비동기 모달
      </button>
    </div>
  );
};

export default TestPage;

const TestModal = ({ title }: { title: string }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <button className="open-modal-btn" onClick={() => modal.close()}>
          확인
        </button>
        <button className="modal-close" onClick={() => modal.close()}>
          취소
        </button>
        <button className="open-modal-btn" onClick={openModal}>
          모달 열기
        </button>
      </div>
    </div>
  );
};

const TestAsyncModal = ({ resolve, title }: { resolve: ModalResolver<string>; title: string }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <button className="open-modal-btn" onClick={() => resolve("확인")}>
          확인
        </button>
        <button className="modal-close" onClick={() => modal.close()}>
          취소
        </button>
      </div>
    </div>
  );
};
