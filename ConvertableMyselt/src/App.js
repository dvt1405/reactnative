
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Bignumber } from 'bignumber.js';
import ConvertScreen from './containers/ConverttScreen'
import {backgroundColors} from './components/theme'
export default class App extends Component {
  render() {
    return (
      <View
        style={[{flex: 1},{ backgroundColor: backgroundColors }]}
      >
        <ConvertScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
