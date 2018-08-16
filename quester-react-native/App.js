import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
require("./build/kotlin-js-min/main/kotlin.js");
const mainApp = require("./build/kotlin-js-min/main/quester-react-native.js");

export default class App extends React.Component {
  render() {
      const test = mainApp.test();
    return (
      <View style={styles.container}>
        <Text>Open up App.js {test} to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
});
