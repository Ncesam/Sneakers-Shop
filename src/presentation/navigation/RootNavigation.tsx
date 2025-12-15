import LoadingScreen from '@screens/loading';
import OnboardingScreens from './Onboarding';
import useAuth from '@data/storage/auth';
import MainNavigation from './MainNavigation';

const RootNavigation = () => {
  const { isLoading, hasSeenOnboarding } = useAuth();
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (!hasSeenOnboarding) {
    return <OnboardingScreens />;
  }
  return <MainNavigation />;
};
export default RootNavigation;
