import LoadingScreen from '@screens/loading';
import OnboardingScreens from './Onboarding';
import useAuth from '@data/storage/auth';
import StoreStack from './StoreStack';

const RootNavigation = () => {
  const { isLoading, hasSeenOnboarding } = useAuth();
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (!hasSeenOnboarding) {
    return <OnboardingScreens />;
  }
  return <StoreStack />;
};
export default RootNavigation;
