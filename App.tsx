import { ThemeProvider } from '@theme/index';
import React from 'react';
import {View} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootNavigator>
          
        </RootNavigator>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;
