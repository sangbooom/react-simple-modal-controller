import { ModalInfo } from "../types/modal";

export type ModalReducerAction<V = unknown> =
  | {
      type: "OPEN";
      id: ModalInfo["id"];
      Component: ModalInfo["Component"];
      props: ModalInfo["props"];
    }
  | {
      type: "OPEN_ASYNC";
      id: ModalInfo["id"];
      Component: ModalInfo["Component"];
      props: ModalInfo["props"];
      resolver: ModalInfo<V>["resolve"];
    }
  | { type: "CLOSE" }
  | { type: "CLEAR" };

export const modalReducer = <V>(
  state: ModalInfo[],
  action: ModalReducerAction<V>
) => {
  switch (action.type) {
    case "OPEN":
      return [
        ...state,
        {
          id: action.id,
          Component: action.Component,
          props: action.props,
        },
      ];

    case "OPEN_ASYNC":
      return [
        ...state,
        {
          id: action.id,
          Component: action.Component,
          props: action.props,
          resolve: (value: V) => action.resolver ? action.resolver(value) : undefined,
        },
      ];

    case "CLOSE":
      return state.slice(0, -1);

    case "CLEAR":
      return [];

    default:
      return state;
  }
};
