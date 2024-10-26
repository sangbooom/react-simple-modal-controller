import { PropsWithChildren, useEffect } from "react";
import { modal } from "../context/event";
import { useSyncModalStore } from "../context/useSyncModalStore";
import Portal from "./Portal";

const ModalProvider = ({ children }: PropsWithChildren) => {
  const modalInfos = useSyncModalStore();
  console.log({ modalInfos });

  useEffect(() => {
    return () => {
      modal.clear();
    };
  }, []);

  if (!modalInfos.length) return <>{children}</>;

  return (
    <>
      {children}
      <Portal>
        {modalInfos.map((topComponentInfo) => (
          <topComponentInfo.Component
            key={topComponentInfo.id}
            resolve={topComponentInfo.resolve}
            {...(topComponentInfo?.props ?? {})}
          />
        ))}
      </Portal>
    </>
  );
};

export default ModalProvider;
