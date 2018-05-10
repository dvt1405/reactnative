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
import ColorButton from './ColorButton';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
//Component
//Props
//State

const Text2 = props => (
  <Text>
    {props.children}
    {props.username}

  </Text>
);
//Class Component

export default class App extends Component {
  state = {
    colors: ['red', 'green', 'blue', 'yellow'],
    requirement: [],
    arrButtonPressed: [],
    indexButtonPressed: 0
  }
  componentDidMount() {
    this._creatRequirement();
  }

  _creatRequirement = () => {
    this.setState({
      requirement: Array.from({ length: 4 }).map(i => Math.floor(Math.random() * 4)),
      arrButtonPressed: [],
      indexButtonPressed: 0
    });
  }
  result = (id) => {
    this.setState({
      arrButtonPressed: this.state.arrButtonPressed.concat([id]),
      indexButtonPressed: this.state.indexButtonPressed + 1
    })
  }
  _onButtonPressed = id => {
    this.setState(
      {
        buttonID: id
      });
      id == this.state.requirement[this.state.indexButtonPressed] ? this.result(id) : this._creatRequirement();
  }; 
  getButtonID = () => {
    return this.state.buttonID
  }
  render() {
    const buttons = this.state.colors
      .map((color, index) =>
        <ColorButton
          key={index}
          onButtonPressed={this._onButtonPressed}
          id={index}
          bgColor={color} />)
    return (
      <View style={styles.container}>{/*props children dac biet*/}
        <Text>{this.state.requirement}</Text>
        <Text> {this.state.arrButtonPressed}</Text>
        {buttons}
      </View>
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
