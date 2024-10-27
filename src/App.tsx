import React from "react";
import AsyncModalButton from "./example/AsyncModal";
import BasicModalButton from "./example/BasicModal";
import "./example/Modal.css";
import { ModalProvider } from "./lib/components/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <BasicModalButton />
      <AsyncModalButton />
    </ModalProvider>
  );
}

export default App;
