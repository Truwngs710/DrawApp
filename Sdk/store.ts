import {create} from 'zustand'

export type DispatchAction = (color?: string) => void

interface Action {
  action?: {
    color?: string
  }
  dispatchAction: DispatchAction
}

export const useStoreColorProps = create<Action>((set, get) => {
  return {
    dispatchAction: (color?: string) => {
      set({ action: { color } })
    }
  }
})