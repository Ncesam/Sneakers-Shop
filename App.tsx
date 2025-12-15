import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@uiKit/index';
import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from '@navigation/RootNavigation';
function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar hidden={true} animated={true} />
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
