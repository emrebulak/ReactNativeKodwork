import { View, FlatList } from 'react-native';
import React, {useState } from 'react';
import styles from './Jobs.style';

//Componenets
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import JobCard from '../../components/JobCard';

//Hooks
import useFetch from '../../hooks/useFetch';

//API
import { API_URL } from '@env';

const Jobs = ({ navigation }: any) => {

    const [page, setPage] = useState(0);
    const { data, loading, error }: any = useFetch(`${API_URL}=${page}`);

    let keyExtractor = (item: any) => item.id;
    let renderItem = ({ item }: any) => <JobCard value={item} navigation={navigation} />;

    if (loading) {
        return (
            <Loading />
        )
    }

    if (error != null) {
        return (
            <Error />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={keyExtractor} data={data.results} renderItem={renderItem} />
        </View>
    )
}

export default Jobs;