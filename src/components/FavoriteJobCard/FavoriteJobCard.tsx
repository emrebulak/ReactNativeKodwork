import { View, Text } from 'react-native';
import React from 'react';
import styles from './FavoriteJobCard.style';
import { useDispatch } from 'react-redux'
import { remove } from '../../features/jobs/jobsService';

//Componenets
import Button from '../Button';

const FavoriteJobCard = ({ value }: any) => {

    const dispatch = useDispatch();


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{value.item.name}</Text>
                <Text style={styles.company}>{value.item.company.name}</Text>
                <Text style={styles.location}>{value.item.locations[0].name}</Text>
            </View>

            <View style={styles.inner_container}>
                <Text style={styles.level}>{value.item.levels[0].name}</Text>
            </View>

            <Button type="large" title="Remove" onPress={() => dispatch(remove(value.item.id))} />
        </View>
    )
}

export default FavoriteJobCard;