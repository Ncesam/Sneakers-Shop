import Button from '@uiKit/button';
import {
  StrengthOnboardingScreen,
  TravelOnboardingScreen,
  WelcomeOnboardingScreen,
} from '@screens/onboardings';
import useAuth from '@data/storage/auth';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
const OnboardingScreenArray: Array<React.FC> = [
  WelcomeOnboardingScreen,
  TravelOnboardingScreen,
  StrengthOnboardingScreen,
];
const OnboardingScreens = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const completeOnBoarding = useAuth(state => state.completeOnBoarding);
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    screenContainer: {
      width: '100%',
      height: '100%',
    },

    buttonContainer: {
      position: 'absolute',
      bottom: 36,
      zIndex: 1,
      alignItems: 'center',
      width: '100%',
    },
  });
  const handleLeftSwipe = () => {
    if (currentIndex == OnboardingScreenArray.length - 1) {
      completeOnBoarding();
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handleRightSwipe = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const currentScreen = OnboardingScreenArray[currentIndex];
  const CurrentScreenComponent = currentScreen;
  return (
    <GestureRecognizer
      onSwipeLeft={handleLeftSwipe}
      onSwipeRight={handleRightSwipe}
    >
      <View style={styles.screenContainer}>
        <CurrentScreenComponent />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={currentIndex === 0 ? 'Начать' : 'Далее'}
          onPress={handleLeftSwipe}
        />
      </View>
    </GestureRecognizer>
  );
};
export default OnboardingScreens;
