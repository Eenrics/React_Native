import { View, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab'
import styles from './styles';
import { useQuery } from '@apollo/client';
import useSignOut from '../hooks/useSignOut';
import { ME } from '../graphql/queries';
import Text from './Text';

const AppBar = () => {
  const { data, error, loading } = useQuery(ME)
  const signOut = useSignOut()
  
  if (loading) return <View style={styles.container}><Text style={styles.item}>Fetching Data</Text></View>
  if (error) return <View style={styles.container}><Text style={styles.item}>Error connecting to the internet</Text></View>

  const isLoggedIn = data.me

  return <View style={styles.container}>
            <ScrollView horizontal>
              <Link to='/'>
                <AppBarTab value='Repositories' />
              </Link>
             { isLoggedIn ?
                       <>
                         <Link to='/create'><AppBarTab value='Create a review' /></Link> 
                         <Link to='/myreviews'><AppBarTab value='My Reviews' /></Link> 
                         <Pressable onPress={() => signOut()}><AppBarTab value='Sign out' /></Pressable>
                       </>
                     : <>
                        <Link to='/signin'><AppBarTab value='Sign in' /></Link>
                        <Link to='/signup'><AppBarTab value='Sign up' /></Link>
                       </>
                          }
            </ScrollView>
          </View>;
};

export default AppBar;