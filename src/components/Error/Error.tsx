import React from 'react';
import Lottie from 'lottie-react-native';
import styles from './Error.style';
import { View } from 'react-native';

const Error = () => {
    return (
        <View style={styles.container}>
            <Lottie style={styles.animation} source={require('../../assets/animation/error.json')} autoPlay loop />
        </View>
    );
}

export default Error;