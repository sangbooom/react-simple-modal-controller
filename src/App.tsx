import React from "react";
import ModalProvider from "./lib/components/ModalProvider";
import TestPage from "./example/TestPage";

function App() {
  return (
    <ModalProvider>
      <TestPage />
    </ModalProvider>
  );
}

export default App;
