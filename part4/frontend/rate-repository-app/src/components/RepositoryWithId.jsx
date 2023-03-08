import { View, FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import ReviewItem from './ReviewItem';



const ItemDivider = () => {
    return (
      <View
        style={{
          height: 7,
          width: "100%",
          backgroundColor: "#ddd",
        }}
      />
    );
  }
    
const RepositoryWithId = () => {
    const {id} = useParams()
    const { repository, loading, error } = useRepository(id);

    if (loading) return <View><Text fontWeight='bold' fontSize='subheading' style={{paddingLeft: 50, color: '#88aaff'}}>Loading...</Text></View>
    if (error) return <View><Text fontWeight='bold' fontSize='subheading' style={{paddingLeft: 50, color: 'red', width: 300}}>Error has occured when loading data from the server</Text></View>  

    return <FlatList
                data={repository.reviews.edges}
                renderItem={({ item }) => <ReviewItem review={item.node} />}
                // keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemDivider}
                ListHeaderComponent={() => <RepositoryItem value={repository} detail />}
            />
};

export default RepositoryWithId;