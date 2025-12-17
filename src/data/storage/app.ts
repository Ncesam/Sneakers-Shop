import {create} from "zustand";

interface IAppStore {
  isDarkBar: boolean

  setIsDarkBar: (value: boolean) => void
}


const useAppStore = create<IAppStore>((set) => {
  return ({
    isDarkBar: false,

    setIsDarkBar: (value: boolean) => set({isDarkBar: value})
  })
})

export default useAppStore;
