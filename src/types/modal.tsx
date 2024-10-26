export interface ModalInfo<V = unknown> {
  id: string;
  Component: React.ComponentType<any>;
  props?: Record<string, unknown>;
  resolve?: (value: V) => void;
}
