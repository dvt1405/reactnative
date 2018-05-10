import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class ColorButton extends Component {
    state = {  };
    _onPress = () => {
        this.props.onButtonPressed(this.props.id);
    }
    render() {
        return (
            <TouchableOpacity onPress ={this._onPress} isPressed = {true}>
                <View
                    style ={{
                        width: 40,
                        height: 40,
                        backgroundColor: this.props.bgColor,
                        borderRadius: 5

                    }}
                /> 
            </TouchableOpacity>    
        );
    }
}

export default ColorButton;