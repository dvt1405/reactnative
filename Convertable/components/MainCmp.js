import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import TextInputcmp from './TextInputcmp'
import SelectUnit from './SelectUnit'
class MainCmp extends Component {
    state = {
        buttonTitle: ['Meter', 'Meter', 'Decimeter', 'Decimeter', 'Centimeter', 'Centimeter',
            'Millimeter', 'Millimeter'],
        colors: ['#62B9CF', '#5AA9BD', '#62B9CF', '#5AA9BD'],
        number1: 1,
        number2: 1,
        text1: '',
        text2: ''
    }
    _onPressed = (id) => {
        (id % 2) == 0 ? this.setState({
            number1: (Math.pow(10, id / 2)),
            text1: this.state.buttonTitle[id]
        }) : this.setState({
            number2: (Math.pow(10, parseInt((id / 2)))),
            text2: this.state.buttonTitle[id]
        })
    }
    render() {
        const convetButtons = this.state.buttonTitle.map((title, index) => (
            <SelectUnit
                key={index}
                title={title}
                id={index}
                onPressed={this._onPressed}
                bgColor={this.state.colors[parseInt(index / 2)]}
            />)
        )
        return (
            <View style={styles.container}>
                <View style={styles.textview}>
                    <Text style={styles.texts}> {this.state.text1} </Text>
                    <Text style={styles.texts}> {this.state.text2} </Text>
                </View>
                <View>
                    <TextInputcmp
                        number1={this.state.number1}
                        number2={this.state.number2}
                    />
                </View>
                <View style={[styles.buttons]}>
                    {convetButtons}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#53B3CB',
    },
    buttons: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#5AA9BD'
    },
    textview: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#53B3CB',
        flexDirection: 'row'
    },
    texts: {
        fontSize: 35,
        flex: 1
    }

});
export default MainCmp;