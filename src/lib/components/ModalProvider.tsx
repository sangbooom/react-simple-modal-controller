import { ReactNode, useEffect } from "react";
import { modal } from "../context/event";
import { useSyncModalStore } from "../context/useSyncModalStore";
import Portal from "./Portal";

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const modalInfos = useSyncModalStore();

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
