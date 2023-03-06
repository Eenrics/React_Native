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
    }
});

export default styles