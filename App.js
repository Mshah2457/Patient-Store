import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Dashboard from './src/components/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.hiddenContainer}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>HI moni</Text>
         <Text>HI dhruti</Text>
         <Dashboard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   hiddenContainer: {
    top: window.height,
    bottom: -window.height
  }
});
