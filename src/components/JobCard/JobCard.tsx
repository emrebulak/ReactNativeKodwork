import { View, Text } from 'react-native';
import React from 'react';
import styles from './JobCard.style';

const JobCard = (params: any) => {
    //console.log("Params : ", params);
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{params.value.name}</Text>
                <Text style={styles.description}>{params.value.company.name}</Text>
                <Text style={styles.area}>{params.value.locations[0].name}</Text>
            </View>
            <View style={styles.footer_container}>
                <Text style={styles.level}>{params.value.levels[0].name}</Text>
            </View>
        </View>
    )
}

export default JobCard;