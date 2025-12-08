import CoverScreen from "@screens/cover";
import LoadingScreen from "@screens/loading";
import { useAuth } from "@storage/auth";
import AuthNavigator from "@navigation/AuthStack";

const RootNavigation = () => {
    const {isLoading, isLogged, hasSeenOnboarding} = useAuth();
    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }
    if (!hasSeenOnboarding) {
        return <AuthNavigator />;
    }

    if (!isLogged) {
        return <CoverScreen />;
    }
    return (
        <CoverScreen />
    )
}
export default RootNavigation;