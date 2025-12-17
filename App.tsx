import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@uiKit/index';
import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from '@navigation/RootNavigation';
import useAppStore from '@data/storage/app';
function App() {
  const isDarkBar = useAppStore(state => state.isDarkBar);
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" barStyle={isDarkBar ? "dark-content" : "light-content"} animated />
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
