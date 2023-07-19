import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './FavoritedJobs.style';
import { useSelector } from 'react-redux';

//Componenets
import FavoriteJobCard from '../../components/FavoriteJobCard';

const FavoritedJobs = ({ navigation }: any) => {
    const jobs = useSelector((state: any) => state.jobs.value);

    return (
        <View style={styles.container}>
            {
                jobs.length <= 0 && (<View style={styles.emptyJobs}><Text style={styles.emptyJobsText}>Favorilere eklenmiş iş bulunamadı</Text></View>)
            }

            <FlatList keyExtractor={(item: any) => item.id} data={jobs} renderItem={(item: any) => <FavoriteJobCard value={item} />} />
        </View>
    )
}

export default FavoritedJobs;