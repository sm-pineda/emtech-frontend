import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    
    screenContainer: {
        flex: 1,
        backgroundColor: '#ddddddff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
        headerText: {
        fontSize: 24,
        marginBottom: 15,
        fontWeight: 'bold',
        color: '#333',
    },

        buttonContainer: {
        marginTop: 15,
        marginBottom: 10,
    },

//user list page styles //

    listScreenContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    listHeader: {
        fontSize: 26,
        fontWeight: '700',
        color: '#444',
        padding: 20,
        paddingTop: 50, 
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
    },

    listItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        borderLeftWidth: 6,
        borderLeftColor: '#172ca5ff',
        marginHorizontal: '25%',
    },

});
