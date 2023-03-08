import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import Text from './Text';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import SortItem from './SortItem';
import SearchItem from './SearchItem';
import {CREATED_AT, DESC} from './SortItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    const navigate = useNavigate()

  return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => {
          return (
              <Pressable onPress={() => navigate(`/${item.id}`)} >
                <RepositoryItem value={item} />
              </Pressable>
          )
        }}
      />
  );
}

const RepositoryList = () => {
  const [order, setOrder] = useState({sort: CREATED_AT, orderby: DESC})
  const [search, setSearch] = useState('')

  // if (status === LOWEST) {
  //   setOrder({sort: RATING_AVERAGE, orderby: ASC})
  // } else if (status === HIGHEST) {
  //   setOrder({sort: RATING_AVERAGE, orderby: DESC})
  // } else {
  //   setOrder({sort: CREATED_AT, orderby: DESC})
  // }

  const { repositories, loading, error } = useRepositories(order, search);

  if (loading) return <View><Text fontWeight='bold' fontSize='subheading' style={{paddingLeft: 50, color: '#88aaff'}}>Loading...</Text></View>
  if (error) return <View><Text fontWeight='bold' fontSize='subheading' style={{paddingLeft: 50, color: 'red', width: 300}}>Error has occured when loading data from the server</Text></View>

  return <>
           <SearchItem 
           search={search}
           setSearch={setSearch} />
           <SortItem 
              order={order}
              setOrder={setOrder} />
           <RepositoryListContainer repositories={repositories} /> 
         </>  
};

export default RepositoryList;