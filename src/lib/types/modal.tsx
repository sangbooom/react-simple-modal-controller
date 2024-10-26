export type ModalResolver<V> = (value: V) => void;

export interface ModalInfo<V = unknown> {
  id: string;
  Component: React.ComponentType<any>;
  props?: Record<string, unknown>;
  resolve?: ModalResolver<V>;
}
