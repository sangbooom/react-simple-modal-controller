import React from "react";
import TestPage from "./example/TestPage";
import { ModalProvider } from "./lib/components/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <TestPage />
    </ModalProvider>
  );
}

export default App;
