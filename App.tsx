
import Card from '@components/card';
import { ThemeProvider } from '@theme/index';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#48B2E7"
    }
  })
  return (
    <SafeAreaProvider style={styles.container}>
      <ThemeProvider>
          <Card price={1000} title='Sneaker' />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;
