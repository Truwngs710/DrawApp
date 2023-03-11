import { create } from "zustand";

export type DispatchAction = (color?: string) => void;

interface Action {
  action?: {
    color?: string;
    data?: [];
  };
  dispatchAction: DispatchAction;
}

export const useSColor = create<Action>((set, get) => {
  return {
    dispatchAction: (color?: string) => {
      set({ action: { color } });
    },
  };
});

export const useSData = create<Action>((set, get) => {
  return {
    dispatchAction: (color?: string, data?: []) => {
      set({ action: { color, data } });
    },
  };
});
