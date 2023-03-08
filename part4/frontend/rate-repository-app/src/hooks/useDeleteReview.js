import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { Alert } from "react-native";
import { MY_REVIEWS } from "../graphql/queries";

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW, {
        onError: (error) => {
            Alert.alert(error.message)
          },
          refetchQueries: [{query: MY_REVIEWS}]
      });
  
    const deleteReview = async (deleteReviewId) => {
        // Alert.alert('Delete review', 'Are you sure you want to delete this review? ' [
        //     {
        //       text: 'Cancel',
        //       onPress: () => console.log('deletion canceled'),
        //       style: 'cancel',
        //     },
        //     {
        //       text: 'Delete',
        //       onPress: async () => {
        //           let {data} = await mutate({ variables: { deleteReviewId }})
        //           client.refetchQueries()
        //           data && data.deleteReview ? console.log('review deleted') : null
        //       },
        //     }
        //   ]);
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Delete', onPress: async () => {
                console.log('Delete Pressed')
                await mutate({ variables: { deleteReviewId }})
            }},
          ]);
    };
  
    return [deleteReview, result];
  };

export default useDeleteReview