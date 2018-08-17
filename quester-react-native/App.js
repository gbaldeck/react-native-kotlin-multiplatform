import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const quester = require("./build/js/quester-react-native");

export default class App extends React.Component {
  render() {
      const test = quester.quester.init();
    // return (
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <Text>Changes you make will automatically reload.</Text>
    //     <Text>Shake your phone to open the developer menu.</Text>
    //   </View>
    // );
      return React.createElement(
          View,
          { style: styles.container },
          React.createElement(
              test,
              null,
              null,
          )
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
