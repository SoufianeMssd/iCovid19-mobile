import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{"color": "white", "fontSize": 32, "fontWeight": "600"}}>Hi Everyone! </Text>
      <Text style={{"color": "white", "fontSize": 20}}>I'm starting a new project </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(29, 161, 242)',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
