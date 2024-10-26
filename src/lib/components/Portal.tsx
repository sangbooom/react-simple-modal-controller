import { PropsWithChildren, useEffect, useState } from "react";

import { createPortal } from "react-dom";

const MODAL_ID = "modal-container";

const createModalContainer = () => {
  const modalContainer = document.createElement("div");
  modalContainer.id = MODAL_ID;
  document.body.append(modalContainer);
  return modalContainer;
};

const Portal = ({ children }: PropsWithChildren) => {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    setContainer(createModalContainer());
  }, []);

  if (!container) return null;

  return createPortal(children, container);
};

export default Portal;
