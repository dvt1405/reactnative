import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Bignumber } from 'bignumber.js';
import SelectUnit from '../components/SelectUnit'
import ColumnSelectUnit from '../components/ColumnSelectUnit';
import { commonStyle, backgroundColors } from '../components/theme'
class ConvertSreen extends Component {
    state = {
        value: 0
    }
    _onChangeValue = (tovalue) =>{
        this.setState({
            value: tovalue
        })
    }
    render() {
        return (
            <View
                style={[ commonStyle.flexDirections, {backgroundColor: backgroundColors}]}
            >
                <ColumnSelectUnit 
                    value= {this.state.value}
                    onChangeValue = {this._onChangeValue}
                />
                <ColumnSelectUnit 
                    value= {this.state.value}
                    onChangeValue = {this._onChangeValue}
                />
            </View>
        );
    }
}

export default ConvertSreen;