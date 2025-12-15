import CoverScreen from '@screens/cover';
import LoadingScreen from '@screens/loading';
import AuthNavigator from '@navigation/AuthStack';
import OnboardingScreens from './Onboarding';
import useAuth from '@storage/auth';
import { useEffect } from 'react';
import CheckCodeScreen from '@screens/checkCode';
import MainStackScreen from './MainNavigation';
import MainNavigation from './MainNavigation';

const RootNavigation = () => {
  const { isLoading, isLogged, hasSeenOnboarding } = useAuth();
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (!hasSeenOnboarding) {
    return <OnboardingScreens />;
  }
  return <MainNavigation />;
};
export default RootNavigation;
