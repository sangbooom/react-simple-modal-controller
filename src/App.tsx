import ModalProvider from "./components/ModalProvider";
import TestPage from "./components/TestPage";

function App() {
  return (
    <ModalProvider>
      <TestPage />
    </ModalProvider>
  );
}

export default App;
