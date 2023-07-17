import { View, Text, Button } from 'react-native';
import React from 'react';
import styles from './FavoritedJobs.style';
import { useSelector, useDispatch } from 'react-redux';

const FavoritedJobs = ({ navigation }: any) => {
    const jobs = useSelector((state: any) => state.jobs.value);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back Jobs" />

            {
                jobs.map((j: any, i: any) => <Text key={i}>{j}</Text>)
            }

        </View>
    )
}

export default FavoritedJobs;