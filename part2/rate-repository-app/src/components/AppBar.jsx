import { View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab'
import styles from './styles';

const AppBar = () => {
  return <View style={styles.container}>
            <ScrollView horizontal>
              <Link to='/'>
                <AppBarTab value='Repositories' />
              </Link>
              <Link to='/signin'>
                <AppBarTab value='Sign in' />
              </Link>
            </ScrollView>
          </View>;
};

export default AppBar;