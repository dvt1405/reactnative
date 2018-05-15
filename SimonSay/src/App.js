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
import GamePlay from './GamePlay';
import GameOver from './GameOver';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    isPlaying: true,
    score: 0
  }
  _onGameOver = score =>
   this.setState({
     isPlaying: false,
     score
   });
   _onReplay = () => this.setState({isPlaying: true});
  render() {

    return (
      this.state.isPlaying ? <GamePlay onGameOver = {this._onGameOver}/> 
      :(<GameOver score = {this.state.score} onReplay = {this._onReplay}/>)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
