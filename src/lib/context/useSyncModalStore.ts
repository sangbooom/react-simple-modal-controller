import { useSyncExternalStore } from "use-sync-external-store/shim";
import { registerModalStore } from "./store";

export const useSyncModalStore = () => {
  const { subscribe, getSnapshot } = registerModalStore;
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
};
