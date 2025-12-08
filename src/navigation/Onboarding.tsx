import { useNavigation } from "@react-navigation/native";
import { TravelOnboardingScreen, WelcomeOnboardingScreen } from "@screens/onboardings";
import { useState } from "react"
import { View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
const OnboardingScreenArray: Array<React.FC> = [
    WelcomeOnboardingScreen, TravelOnboardingScreen
]
const OnboardingScreens = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const navigation = useNavigation();
    const handleLeftSwipe = () => {
        if (currentIndex === 2) {
            navigation.navigate("Login")
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }
    const handleRightSwipe = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const currentScreen = OnboardingScreenArray[currentIndex]
    const CurrentScreenComponent = currentScreen;
    return (
        <GestureRecognizer onSwipeLeft={handleLeftSwipe} onSwipeRight={handleRightSwipe}>
            <CurrentScreenComponent/>
        </GestureRecognizer>
    )
}
export default OnboardingScreens;