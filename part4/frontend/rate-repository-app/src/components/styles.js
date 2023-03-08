import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 7,
        padding: 7,
        backgroundColor: theme.colors.nav,
        flexDirection: 'row',
  },
    item: {
        marginRight: 30,
        color: 'white',
        padding: 5,
    },
    button: {
        backgroundColor: '#0366d6',
        color: 'white',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        padding: 7,
        borderRadius: 4
    },
    rate: {
        borderColor: '#0366d6', 
        borderWidth: 3, 
        width: 62,
        height: 62, 
        borderRadius: 33, 
        flexGrow: 0, 
        marginRight: 'auto', 
        padding: 13, 
        margin: 5
    },
    rateText: {
        color: '#0366d6', 
        fontSize: 23, 
        paddingLeft: 5, 
        paddingTop: 1
    },
    date: {
        color: 'gray'
    },
    username: {
        fontSize: 18
    }
});

export default styles