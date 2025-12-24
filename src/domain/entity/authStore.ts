
export interface IAuthStore {
  isLoading: boolean;
  isLogged: boolean;
  hasSeenOnboarding: boolean;
  userToken: string;

  login: () => void;
  logout: () => void;
  completeOnBoarding: () => void;
  setIsLoading: (value: boolean) => void;
}
