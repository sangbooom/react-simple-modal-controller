# react-simple-modal-controller

A simple and convenient modal controller for react

## Installation

```
npm install react-simple-modal-controller
```

## React dependency
React >= 16.8.0

## Setting

Wrap the top folder with a provider. that's all!

```tsx
import ModalProvider from "react-simple-modal-controller";

const App = () => {
  return <ModalProvider>...</ModalProvider>;
};
```

## Usage

### basic modal

```tsx
const openModal = () => {
  modal.open(ModalComponent, { title: "test" });
};

const Page = () => {
  return <button onClick={openModal}>modal open</button>;
};

const ModalComponent = ({ title }: { title: string }) => {
  return (
    <div className="modal">
      <h2>{title}</h2>
      <button onClick={modal.close}>ok</button>
      <button onClick={modal.close}>cancel</button>
      <button onClick={openModal}>nesting modal open</button>
    </div>
  );
};
```

### async modal

```tsx
const openAsyncModal = async () => {
  try {
    const response = await modal.openAsync<UserConsentResponse>(AsyncModalComponent, {
      userId: 123,
    });
    if(response) {
        ...
    } else {
        ...
    }
  } catch (error) {
    ...
  }
};

const Page = () => {
  return <button onClick={openAsyncModal}>
    asyncModal open
  </button>
};

const TestAsyncModal = ({ resolve, userId }: { resolve: ModalResolver<string>; userId: number }) => {
  return (
    <div className="modal">
      <h2>{title}</h2>
      <button
        onClick={async () => {
          const response = await getUserConsent(userId);
          resolve(response);
        }}
      >
        ok
      </button>
      <button
        onClick={() => {
          reject(null);
          modal.close();
        }}
      >
        cancel
      </button>
    </div>
  );
};
```

## Playground

[![Edit react-simple-modal-controller](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/react-simple-modal-controller-v83lkn)
