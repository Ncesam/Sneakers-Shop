import { IShopBagStore } from "@domain/entity/shopBagStore";
import { IShopBagSneaker, ISneaker } from "@domain/entity/sneaker";
import { createMMKV } from "react-native-mmkv";
import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";


const mmkvStorage = createMMKV({
  id: 'shopBagStorage',
});
const customStorage = createJSONStorage(() => ({
  setItem: (name, value) => {
    return mmkvStorage.set(name, value);
  },
  getItem: name => {
    const value = mmkvStorage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return mmkvStorage.remove(name);
  },
}));



const useShopBagStore = create(persist<IShopBagStore>(
  (set, get) => ({
    addSneaker: (sneaker: IShopBagSneaker) => set(state => ({
      sneakers: [...state.sneakers, sneaker]
    })),
    getAllSneakers: () => get().sneakers,
    removeSneaker: (id: number) => set(state => ({
      sneakers: state.sneakers.filter(sneaker => sneaker.id !== id)
    })),
    getSneaker: (id: number) => {

    },
    incrementCountSneaker: (id: number) => set(state => ({
      sneakers: [...state.sneakers.map((value, _) => value.)]
    })),
    setIsLoading: (value: boolean) => set({ isLoading: value }),


    sneakers: [],
    isLoading: false,
  }),
  {
    name: "shopBagStore",
    storage: customStorage,
    partialize: state => ({
      sneakers: state.sneakers
    }),
    onRehydrateStorage: state => {
      state.isLoading = true
      return () => ({
        isLoading: false
      })
    }
  }
))

export default useShopBagStore;
