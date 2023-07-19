import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 6,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    title: {
        color: 'black',
        fontSize: 21,
        fontWeight: 'bold'
    },
    company: {
        color: 'black',
        fontSize: 16
    },
    location: {
        backgroundColor: '#EF5350',
        color: 'white',
        borderRadius: 15,
        padding: 2,
        paddingLeft: 7,
        paddingRight: 7,
        alignSelf: 'flex-start',
        fontSize: 15,
        fontWeight: 'bold'
    },
    inner_container: {
        alignItems: 'flex-end',
        margin:3
    },
    level: {
        color: '#EF5350',
        fontWeight: 'bold',
        fontSize: 15
    }

});