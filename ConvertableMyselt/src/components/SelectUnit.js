import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import { commonStyle, backgroundColors, inputTextBackground } from './theme';
import { BigNumber } from 'bignumber.js';
BigNumber.config({ DECIMAL_PLACES: 10 })
class SelectUnit extends Component {
    state = {
        finalValue: new BigNumber(this.props.value).div(this.props.units.ratior).toString()
    }
    componentWillReceiveProps(nextProps) {
        const newValue = new BigNumber(nextProps.value).div(nextProps.units.ratior)
        if (!newValue.isEqualTo(new BigNumber(this.state.finalValue))) {
            this.setState({
                finalValue: newValue.toString()
            })
        }
    }
    _onChange = (value) => {
        this.setState(
            { finalValue: value },
            () => {
                if (!isNaN(parseFloat(value))) {
                    this.props.onChangeValue(new BigNumber(parseFloat(value)).multipliedBy(this.props.units.ratior))
                }
            }
        )
    }
    render() {
        return (
            <View style={[{ backgroundColor: inputTextBackground }]}>
                <Text style={[commonStyle.fontSizeText]}> {this.props.units.name} </Text>
                <TextInput
                    style={[{ paddingHorizontal: 10 }, commonStyle.fontSizeText]}
                    underlineColorAndroid={inputTextBackground}
                    keyboardType='numeric'
                    onChangeText={this._onChange}
                    value={this.state.finalValue}
                />
            </View>
        );
    }
}

export default SelectUnit;