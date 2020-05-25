import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : 24,
        paddingTop : Constants.statusBarHeight + 20,
    },

    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    incident : {
        backgroundColor : '#FFF',
        borderRadius : 8,
        marginTop : 48,
        marginBottom : 16,
        padding : 24
    },

    incidentProperty : {
        fontWeight : 'bold',
        fontSize : 14,
        color : '#41414d'
    },

    incidentValue : {
        marginTop : 8,
        marginBottom : 24,
        fontSize : 15,
        color : '#737380'
    },

    contactBox : {
        backgroundColor : '#FFF',
        borderRadius : 8,
        padding : 24
    },

    heroTitle : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#13131a',
        lineHeight : 30
    },

    heroDescription : {
        fontSize : 15,
        color : '#737380',
        marginTop : 16
    },

    actions : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : '16'
    },

    actionButton : {
        backgroundColor : '#E02041',
        borderRadius : 8,
        height : 50,
        width : '48%',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    actionText : {
        color : '#FFF',
        fontWeight : 'bold',
        fontSize : 16
    }
});