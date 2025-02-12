# react-simple-modal-controller

A simple and convenient modal controller for react

## Installation

```
npm install react-simple-modal-controller
```

## Setting

Wrap the top folder with a provider. that's all!

```tsx
import { ModalProvider } from "react-simple-modal-controller";

const App = () => {
  return <ModalProvider>...</ModalProvider>;
};
```

## Usage

### basic modal

```tsx
import { modal } from "react-simple-modal-controller";

const Page = () => {
  const openModal = () => {
    modal.open(ModalComponent, { title: "test" });
  };
  
  ...
  return <button onClick={openModal}>modal open</button>;
};

const ModalComponent = ({ title }: { title: string }) => {
  return (
    <div className="modal">
      <h2>{title}</h2>
      <button
        onClick={() => {
          // something work
          modal.close();
        }}
      >
        ok
      </button>
      <button onClick={modal.close}>cancel</button>
      <button onClick={openModal}>nesting modal open</button>
    </div>
  );
};
```

### async modal

```tsx
import { modal } from 'react-simple-modal-controller';

const Page = () => {
  const openAsyncModal = async () => {
    try {
      const isOk = await modal.openAsync<boolean>(AsyncModalComponent, {
        userId: 123,
      });
      if(isOk) {
          ...
      } else {
          ...
      }
    } catch (error) {
      ...
    }
  };

  ...
  return <button onClick={openAsyncModal}>asyncModal open</button>
};

const AsyncModalComponent = ({ resolve, userId }: { resolve: (value: boolean) => void; userId: number }) => {
  return (
    <div className="modal">
      <button onClick={() => resolve(true)}>
        ok
      </button>
      <button onClick={() => resolve(false)}>
        cancel
      </button>
    </div>
  );
};
```

## Playground

[![Edit react-simple-modal-controller](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/react-simple-modal-controller-v83lkn)
