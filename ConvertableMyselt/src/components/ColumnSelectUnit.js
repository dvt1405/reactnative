import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native';
import SelectUnit from './SelectUnit';
import { commonStyle, textBackgroundColors, backgroundColors, textColor } from './theme';
import data from '../data.json'
class ColumnSelectUnit extends Component {
    state = {
        units: data.categories[0].units,
        isPressed: 0,
    }
    _onPress = (index) => this.setState({
        isPressed: index
    })

    _renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={[
                { backgroundColor: index % 2 === 0 ? backgroundColors : textBackgroundColors },
                { paddingHorizontal: 10 },
                { paddingVertical: 10 }

            ]}
            onPress={() => this._onPress(index)}
        >
            <Text style={[{ color: index == this.state.isPressed ? 'yellow' : 'black' }, { fontSize: 17 }]}>
                {item.name}
            </Text>
        </TouchableOpacity>
    )
    _keyExtractor = item => item.id.toString();
    render() {
        return (
            <View style={[commonStyle.wraper]}>
                <SelectUnit
                    units={this.state.units[this.state.isPressed]}
                    onChangeValue={this.props.onChangeValue}
                    value={this.props.value}
                    
                />
                <FlatList
                    data={this.state.units}
                    extraData={this.state.isPressed}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }
}

export default ColumnSelectUnit;