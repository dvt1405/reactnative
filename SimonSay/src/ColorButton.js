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
                    style ={[styles.sizes, {backgroundColor: this.props.bgColor}]}
                /> 
            </TouchableOpacity>    
        );
    }
}
const styles = StyleSheet.create({
    sizes: {
        width: 40,
        height: 40,
        borderRadius: 5
    }
})
export default ColorButton;