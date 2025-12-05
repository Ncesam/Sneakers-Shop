import BottomTabsMenu from '@navigation/navigation-menu';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@theme/index';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  const styles = StyleSheet.create({
    testContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: "100%",
      flexDirection: "column",
      gap: 16,
    }
  })
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <BottomTabsMenu />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;
