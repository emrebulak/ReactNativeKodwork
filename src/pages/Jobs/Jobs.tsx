import { View, Text, Button, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Jobs.style';

import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../features/jobs/jobsService';

//Componenets
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import JobCard from '../../components/JobCard';

//Hooks
import useFetch from '../../hooks/useFetch';

//API
import { API_URL } from '@env';

const Jobs = ({ navigation }: any) => {

    const [page, setPage] = useState(2);

    const jobs = useSelector((state: any) => state.jobs.value);
    const dispatch = useDispatch();

    const { data, loading, error }: any = useFetch(`${API_URL}=${page}`);

    let keyExtractor = (item: any) => item.id;
    let renderItem = ({ item }: any) => <JobCard value={item} />;

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