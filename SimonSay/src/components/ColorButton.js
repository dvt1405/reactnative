import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated

} from 'react-native';

class ColorButton extends Component {
    state = {};
    _onPress = () => {
        this.props.onButtonPressed(this.props.id);
    }
    render() {
        return (
            <TouchableOpacity
                disabled = {this.props.disabled}
                onPress={this._onPress}
                style={styles.container}>
                <Animated.View
                    style={[styles.button,
                    {
                        backgroundColor: this.props.bgColor,
                        opacity: this.props.opacity
                    }]}
                />
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '50%',
        padding: 10
    },
    button: {
        flex: 1,
        borderRadius: 5
    }
})
export default ColorButton;