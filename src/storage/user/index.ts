import { IUserStorage } from "types/storage";
import {create} from "zustand";

export const useUserStorage = create<IUserStorage>()((set) => ({
    email: "",
    favorities: 0,
    username: "",
    setEmail: (email: string) => set((model) => ({email: email})),
    increaseFavorities: () => set((model) => ({favorities: model.favorities + 1})),
    setFavorities: (count) => set((model) => ({favorities: count})),
    setUserName: (username) => set((model) => ({username: username}))
}));


