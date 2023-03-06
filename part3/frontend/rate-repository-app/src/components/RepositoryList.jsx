import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
// import useRepositories from '../hooks/useRepositories';
import Text from './Text';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  // const { repositories } = useRepositories();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <View><Text fontWeight='bold' fontSize='subheading' style={{paddingLeft: 50, color: '#88aaff'}}>Loading...</Text></View>
  if (error) return <View><Text fontWeight='bold' fontSize='subheading' style={{paddingLeft: 50, color: 'red', width: 300}}>Error has occured when loading data from the server</Text></View>

  const repositories = data.repositories;

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => {
        return (
            <RepositoryItem value={item} />
        )
      }}
    />
  );
};

export default RepositoryList;