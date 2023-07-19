import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './JobDetail.style';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../../features/jobs/jobsService';

//Components
import Button from '../../components/Button';

const JobDetail = ({ navigation, route }: any) => {
    const [disabled, setDisabled] = useState(true);
    const { width } = useWindowDimensions();

    const jobs = useSelector((state: any) => state.jobs.value);
    const dispatch = useDispatch();

    function addToFavorite() {
        if (getIndex() == -1) {
            dispatch(add(route.params));
            setDisabled(true);
        }

    }

    function getIndex() {
        let id = route.params.id;
        let index = jobs.findIndex((j: any) => j.id == id);
        return index;
    }

    useEffect(() => {
        let tempIndex = getIndex();
        if (tempIndex == -1) {
            setDisabled(false);
        }
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{route.params.name}</Text>
                <Text><Text style={styles.label}>Locations : </Text> <Text style={styles.text}>{route.params.locations[0].name}</Text></Text>
                <Text><Text style={styles.label}>Job Level : </Text> <Text style={styles.text}>{route.params.levels[0].name}</Text></Text>

                <View style={styles.inner_container}>

                    <Text style={styles.detail}>Job Detail</Text>
                    <View style={styles.detailbox}>

                        <RenderHtml contentWidth={width} source={{ html: route.params.contents }} />

                    </View>
                </View>

                <View style={styles.footer_container}>
                    <Button title="Submit" icon="share-square-o" onPress={() => navigation.navigate('Drawer', { screen: 'FavoritedJobsPage' })} />
                    <Button disabled={disabled} title="Favorite Job" icon="heart" onPress={() => addToFavorite()} />
                </View>

            </View>
        </ScrollView>
    )
}

export default JobDetail;