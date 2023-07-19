import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        margin: 10
    },
    title: {
        color: '#37474F',
        fontSize: 25,
        fontWeight: 'bold',

    },
    label: {
        color: '#EF5350',
        fontWeight: 'bold',
        fontSize: 17,
    },
    text: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold'
    },
    inner_container: {
        alignItems: 'center',
        marginTop: 5,
        flex: 1
    },
    detail: {
        color: '#37474F',
        fontSize: 21,
        fontWeight: 'bold'
    },
    detailbox: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        padding: 5,
        paddingLeft: 10,
        marginTop:7,
        margin:5,
        borderWidth:1,
        borderColor:'gray'
        // height: Dimensions.get('window').height
    },
    footer_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});