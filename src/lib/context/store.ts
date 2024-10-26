import { ModalInfo } from "../types/modal";
import { modalReducer, ModalReducerAction } from "./reducer";

let modalInfos: ModalInfo[] = [];
let listeners: Array<() => void> = [];

export const emitChangeListener = () => {
  for (const listener of listeners) {
    listener();
  }
};

export const dispatchModal = (action: ModalReducerAction) => {
  modalInfos = modalReducer(modalInfos, action);
  emitChangeListener();
};

export const registerModalStore = {
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return modalInfos;
  },
};
