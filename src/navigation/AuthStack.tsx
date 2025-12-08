import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OnboardingScreens from "./Onboarding";


const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} >
            <AuthStack.Screen name="Onboarding" component={OnboardingScreens} />
        </AuthStack.Navigator>
    )
}



export default AuthNavigator;
