import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

class GameOver extends Component {
    state = {
        isPlayagain: 0
    }
    _setScore = () => {

    }
    _onPress = () => {
        this.setState({
            isPlayagain: this.state.isPlayagain + 1
        })
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text> GAME OVER </Text>
                <Text> Score: {this.props.score}</Text>
                <Button onPress={this.props.onReplay} title = 'Play Again'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#78C0E0',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FCAB26',
        padding: 15

    },
    otherContainers: {
        flex: 4,
        backgroundColor: '#78C0E0',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})
export default GameOver;