import { ModalInfo } from "../types/modal";
import { dispatchModal } from "./store";

const getRandomId = () => Math.random().toString(36).slice(2);

const openAsync = <V>(Component: ModalInfo["Component"], props?: ModalInfo["props"]): Promise<V> => {
  const id = getRandomId();
  return new Promise((resolve) => {
    dispatchModal({
      type: "OPEN_ASYNC",
      id,
      Component,
      props,
      resolver: (value: unknown) => {
        resolve(value as V);
        modal.close();
      },
    });
  });
};

const open = (Component: ModalInfo["Component"], props?: ModalInfo["props"]) => {
  const id = getRandomId();
  dispatchModal({ type: "OPEN", id, Component, props });
};
const close = () => {
  dispatchModal({ type: "CLOSE" });
};
const clear = () => {
  dispatchModal({ type: "CLEAR" });
};

export const modal = { openAsync, open, close, clear };
