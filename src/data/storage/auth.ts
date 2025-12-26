import { IAuthStore } from 'domain/entity/authStore';
import { createMMKV } from 'react-native-mmkv';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


const mmkvStorage = createMMKV({
  id: 'authStorage',
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
const useAuthStore = create(
  persist<IAuthStore>(
    set => ({
      isLoading: false,
      isLogged: false,
      hasSeenOnboarding: false,
      userToken: "",

      login: () => set({ isLogged: true }),
      logout: () => set({ isLogged: false }),
      completeOnBoarding: () => set({ hasSeenOnboarding: true }),
      setIsLoading: (value: boolean) => set({ isLoading: value }),
    }),
    {
      name: 'authStorage',
      storage: customStorage,
      partialize: state => ({
        hasSeenOnboarding: state.hasSeenOnboarding,
        userToken: state.userToken,
        isLogged: state.isLogged,
      }),
    },
  ),
);

export default useAuthStore;

