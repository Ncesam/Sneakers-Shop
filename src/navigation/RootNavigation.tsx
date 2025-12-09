import CoverScreen from "@screens/cover";
import LoadingScreen from "@screens/loading";
import { useAuth } from "@storage/auth";
import AuthNavigator from "@navigation/AuthStack";
import LoginScreen from "@screens/login";
import OnboardingScreens from "./Onboarding";

const RootNavigation = () => {
    const {isLoading, isLogged, hasSeenOnboarding} = useAuth();
    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }
    if (!hasSeenOnboarding) {
        return <OnboardingScreens />;
    }

    if (!isLogged) {
        return <AuthNavigator />;
    }
    return (
        <CoverScreen />
    )
}
export default RootNavigation;