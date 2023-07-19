import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import styles from './JobCard.style';

const JobCard = ({ value, navigation }: any) => {

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('JobDetailPage', value)}>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{value.name}</Text>
                    <Text style={styles.description}>{value.company.name}</Text>
                    <Text style={styles.area}>{value.locations[0].name}</Text>
                </View>
                <View style={styles.footer_container}>
                    <Text style={styles.level}>{value.levels[0].name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JobCard;