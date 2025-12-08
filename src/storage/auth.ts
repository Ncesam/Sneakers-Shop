import { create } from "zustand";

export const useAuth = create<IAuthStore>((set) => ({
    isLoading: false,
    user: null,

    isLogged: false,
    hasSeenOnboarding: false,

    login: (userData: UserData) => set({
        isLogged: true,
        user: userData
    }),
    
    logout: () => set({
        isLogged: false,
        user: null
    }),

    setHasSeenOnBoarding: () => set({
        hasSeenOnboarding: true
    }),

    setIsLoading: (value: boolean) => set({
        isLoading: value
    })
    
}))

interface IAuthStore {
    isLoading: boolean;
    user: UserData;
    isLogged: boolean;
    hasSeenOnboarding: boolean;

    login: (userData: UserData) => void;
    logout: () => void;
    setHasSeenOnBoarding: () => void;
    setIsLoading: (value: boolean) => void;
}
