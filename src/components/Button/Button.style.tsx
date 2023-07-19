import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 4,
        marginBottom: 15,
        padding: 10,
        borderRadius: 10,
        
        justifyContent: 'center'
    },
    icon: {
        marginRight: 4,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        color: 'white',
        marginLeft: 4,
        fontWeight: 'bold',
        fontSize: 16
    },
    active:{
        backgroundColor: '#EF5350',
    },
    passive:{
        backgroundColor: 'gray',
    },
    middle:{
        width: Dimensions.get('window').width / 2.4,
    },
    large:{
        width: Dimensions.get('window').width,
    }

});