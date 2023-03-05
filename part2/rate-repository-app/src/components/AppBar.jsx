import { View } from 'react-native';
import AppBarTab from './AppBarTab'
import styles from './styles';

const AppBar = () => {
  return <View style={styles.container}><AppBarTab value='Repositories' /></View>;
};

export default AppBar;