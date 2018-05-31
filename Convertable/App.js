/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainCmp from './components/MainCmp';
export default class App extends Component {
  state = {
    
    }
  render() {
    return (
        <MainCmp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'violet',
    // flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12
  }
});
