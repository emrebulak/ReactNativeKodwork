import React from 'react';
import Lottie from 'lottie-react-native';
import styles from './Loading.style';
import { View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Lottie style={styles.animation} source={require('../../assets/animation/loading.json')} autoPlay loop />
        </View>
    );
}

export default Loading;