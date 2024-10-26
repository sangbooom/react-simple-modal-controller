import { useSyncExternalStore } from "react";
import { registerModalStore } from "./store";

export const useSyncModalStore = () => {
  const { subscribe, getSnapshot } = registerModalStore;
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
};
