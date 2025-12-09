import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuth = create(persist((set) => ({
    isLoading: false,
    isLogged: false,
    hasSeenOnboarding: false,

    login: () => set({ isLogged: true }),
    logout: () => set({ isLogged: false }),
    completeOnBoarding: () => set({ hasSeenOnboarding: true }),
    setIsLoading: (value: boolean) => set({ isLoading: value })
}), {
    name: "AuthStore",
    storage: createJSONStorage(() => AsyncStorage),
    partialize: (state) => ({
        hasSeenOnboarding: state.hasSeenOnboarding,
        userToken: state.userToken,
        isLoggedIn: state.isLoggedIn
    })
}))

interface IAuthStore {
    isLoading: boolean;
    isLogged: boolean;
    hasSeenOnboarding: boolean;

    login: () => void;
    logout: () => void;
    completeOnBoarding: () => void;
    setIsLoading: (value: boolean) => void;
}
