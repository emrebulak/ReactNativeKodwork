import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({ type="middle" ,disabled, title, icon, onPress }: any) => {
    let btnStyle = disabled ? styles.passive : styles.active;
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={{ ...styles.container, ...btnStyle, ...type }}>
                <Icon style={styles.icon} name={icon} size={20} color="white" />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;