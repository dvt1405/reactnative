import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
class TextInputcmp extends Component {
    state = {
        text1: '',
        text2: '',
        id: -1,
    }
    _onEndEditting = () => {
        this.state.id == 1 ? this.setState({
            text2: parseFloat(this.state.text1) * this.props.number2 / this.props.number1
        }) : this.state.id == 2 ? this.setState({
            text1: parseFloat(this.state.text2) * this.props.number1/ this.props.number2
        }) : ''
    }
    render() {
        return (
            <View style={styles.containers}>
                <TextInput
                    style={styles.textInputs}
                    placeholder={'Enter your number'}
                    onChangeText={(text) => {
                        this.setState({
                            text1: text,
                            id: 1
                        })
                    }}
                    onEndEditing={this._onEndEditting}
                    value={`${this.state.text1}`}
                    keyboardType ={'numeric'}
                    underlineColorAndroid ={'#53B3CB'}
                // ref={input => { this.TextInput = input }}
                />
                <TextInput
                    style={styles.textInputs}
                    placeholder={'Enter your number'}
                    onChangeText={(text) => {
                        this.setState({
                            text2: text,
                            id: 2
                        })
                    }}
                    onEndEditing={this._onEndEditting}
                    value={`${this.state.text2}`}
                    keyboardType ={'numeric'}
                    underlineColorAndroid ={'#53B3CB'}
                // ref={input => { this.TextInput = input }}
                />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    textInputs: {
        width: '50%',
        height: 150,
        padding: 30,
        paddingLeft: 20,
    },
    containers: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#53B3CB',
        borderColor: '#53B3CB',
    }
})

export default TextInputcmp;