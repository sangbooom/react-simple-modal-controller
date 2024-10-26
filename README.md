# react-simple-modal-controller 

## Example
```tsx
import { modal } from "../context/event";
import { ModalResolver } from "../types/modal";

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
        modal open
      </button>
      <button className="open-modal-btn" onClick={openAsyncModal}>
        asyncModal open
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
        <button className="open-modal-btn" onClick={modal.close}>
          ok
        </button>
        <button className="modal-close" onClick={modal.close}>
          cancel
        </button>
        <button className="open-modal-btn" onClick={openModal}>
          nesting modal open
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
        <button className="open-modal-btn" onClick={() => resolve("OK")}>
          ok
        </button>
        <button className="modal-close" onClick={() => modal.close()}>
          cancel
        </button>
      </div>
    </div>
  );
};

```