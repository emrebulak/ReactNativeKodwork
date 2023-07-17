import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    inner_container: {},
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20

    },
    description: {
        color: 'black',
        fontSize: 15
    },
    area: {
        backgroundColor: '#EF5350',
        color: 'white',
        borderRadius: 15,
        padding: 2,
        paddingLeft: 7,
        paddingRight: 7,
        alignSelf: 'flex-start',
        fontSize:17
    },
    footer_container: {
        alignItems: 'flex-end',
        marginTop:2
    },
    level: {
        color: '#EF5350',
        fontWeight: 'bold',
        fontSize: 17
    }
});