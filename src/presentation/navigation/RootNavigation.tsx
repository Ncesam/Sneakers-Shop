import LoadingScreen from '@screens/loading';
import OnboardingScreens from './Onboarding';
import useAuthStore from '@data/storage/auth';
import StoreStack from './StoreStack';

const RootNavigation = () => {
  const { isLoading, hasSeenOnboarding } = useAuthStore();
  console.log(isLoading);
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (!hasSeenOnboarding) {
    return <OnboardingScreens />;
  }
  return <StoreStack />;
};
export default RootNavigation;
