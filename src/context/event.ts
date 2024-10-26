import { ModalInfo } from "../types/modal";
import { dispatchModal } from "./store";

const openAsync = <V>(
  id: ModalInfo["id"],
  Component: ModalInfo["Component"],
  props: ModalInfo["props"]
): Promise<V> => {
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

const open = (
  id: ModalInfo["id"],
  Component: ModalInfo["Component"],
  props: ModalInfo["props"]
) => {
  dispatchModal({ type: "OPEN", id, Component, props });
};
const close = () => {
  dispatchModal({ type: "CLOSE" });
};
const clear = () => {
  dispatchModal({ type: "CLEAR" });
};

export const modal = { openAsync, open, close, clear };
