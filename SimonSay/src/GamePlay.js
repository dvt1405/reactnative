import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Dimensions,
    Animated
} from 'react-native';

import ColorButton from './components/ColorButton';
import Sound from 'react-native-sound';
class GamePlay extends Component {
    state = {
        colors: ['red', '#475841', '#FFD400', '#392061'],
        requirement: [],
        arrButtonPressed: [],
        isPlaying: false,
        opacity: [
            new Animated.Value(1),
            new Animated.Value(1),
            new Animated.Value(1),
            new Animated.Value(1),
        ],
        buttonDisable: false,
        sounds: [
            new Sound('pling1.mp3', Sound.MAIN_BUNDLE, (erro) => {
                erro ? console.log('erro', enrro) : null
            }),
            new Sound('pling2.mp3', Sound.MAIN_BUNDLE, (erro) => {
                erro ? console.log('erro', enrro) : null
            }),
            new Sound('pling3.mp3', Sound.MAIN_BUNDLE, (erro) => {
                erro ? console.log('erro', enrro) : null
            }),
            new Sound('pling4.mp3', Sound.MAIN_BUNDLE, (erro) => {
                erro ? console.log('erro', enrro) : null
            })
        ]
    }
    componentDidMount() {
        this._increaseDifficulty();
    }
    _increaseDifficulty = () => {
        this.setState({
            requirement: this.state.requirement.concat([Math.floor(Math.random() * 4)]),
            arrButtonPressed: [],
            buttonDisable: true
        },
            () => {
                setTimeout(() => { this._flashButton(0) }, 200);
            }
        );
    }
    _flashButton = index => {
        index < this.state.requirement.length
            ? Animated.sequence([
                Animated.timing(
                    this.state.opacity[this.state.requirement[index]],
                    {
                        toValue: 0,
                        duration: 150,
                    },
                    this.state.sounds[this.state.requirement[index]].play(),
                    this.state.sounds[this.state.requirement[index]].setCurrentTime(0.1)
                ),
                Animated.delay(150),
                Animated.timing(
                    this.state.opacity[this.state.requirement[index]],
                    {
                        toValue: 1,
                        duration: 150
                    },
                ),
            ]).start(() => {
                // cai nay no delay 200s xong khong lam gi ca, em muon lam gi sau do thi phai de no la function callback ben trong start (vi du chinh la dong tren dong nay)
                setTimeout(() => { this._flashButton(index + 1) }, 100)
            })
            : this.setState({ buttonDisable: false })
    }
    _progress = (a) => {
        a.length === this.state.requirement.length ? this._requess() : this.setState({ arrButtonPressed: a });
    }
    _requess = () => {
        this.setState({
            buttonDisable: true
        })
        setTimeout(() => { this._increaseDifficulty() }, 750)
    }
    _onButtonPressed = (id) => {
        id === this.state.requirement[this.state.arrButtonPressed.length] ?
            this._progress(this.state.arrButtonPressed.concat(id)) :
            this.props.onGameOver(this.state.requirement.length - 1);
        this.state.sounds[id].play()
        this.state.sounds[id].setCurrentTime(0.1);
    };
    render() {
        const { width, height } = Dimensions.get('window');
        const buttons = this.state.colors
            .map((color, index) => (
                <ColorButton
                    key={index}rr
                    onButtonPressed={this._onButtonPressed}
                    id={index}
                    bgColor={color}
                    opacity={this.state.opacity[index]}
                    disabled={this.state.buttonDisable}
                />
            ));
        return (
            <View style={styles.container}>
                <Text >Score: {this.state.requirement.length - 1} </Text>
                <View style={[
                    styles.gameBoard,
                    {
                        width: Math.min(width, height),
                        height: Math.min(width, height)
                    }
                ]}>
                    {buttons}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#78C0E0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameBoard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    txt: {
        flex: 1
    }
});

export default GamePlay;