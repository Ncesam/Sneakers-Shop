import RootNavigation from '@navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@theme/index';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

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
