
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Animated
} from 'react-native';
class SelectUnit extends Component {
    state = {
        txtColor: '#383539'
    }
    _onPress = () => {
        this.props.onPressed(this.props.id);
        this.setState({
            txtColor: 'yellow'
        })
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.container, { backgroundColor: this.props.bgColor }]}
                onPress={this._onPress}
            >
                <Text style={[styles.text, { color: this.props.txtColors }]}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '50%',
        padding: 20,
    },
    text: {
        fontSize: 20
    }
})
export default SelectUnit; 