import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/components/app-container'

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <Text>My name is Ashish Patwal.</Text>
        <StatusBar style="auto" />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
