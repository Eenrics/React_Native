import { View, FlatList } from 'react-native';
import Text from './Text';
import ReviewItem from './ReviewItem';
import useMyReviews from '../hooks/useMyReviews';
import useDeleteReview from '../hooks/useDeleteReview';
import { useNavigate } from 'react-router-native';

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
    
const MyReviews = () => {
    const { reviews, loading, error } = useMyReviews();
    const [deleteReview] = useDeleteReview()
    const navigate = useNavigate()
    
    if (loading) return <View><Text fontWeight='bold' fontSize='subheading' style={{paddingLeft: 50, color: '#88aaff'}}>Loading...</Text></View>
    if (error) return <View><Text fontWeight='bold' fontSize='subheading' style={{paddingLeft: 50, color: 'red', width: 300}}>Error has occured when loading data from the server</Text></View>  
    if (!reviews.reviews.edges.length) return <View><Text fontWeight='bold' fontSize='subheading' style={{paddingLeft: 50, color: '#3344aa', width: 300, marginTop: 100, fontSize: 35}}>You have not had any review yet</Text></View>  

    return <FlatList
                data={reviews.reviews.edges}
                renderItem={({ item }) => <ReviewItem review={item.node} mine deleteReview={deleteReview} navigate={navigate} />}
                // keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemDivider}
            />
};

export default MyReviews;