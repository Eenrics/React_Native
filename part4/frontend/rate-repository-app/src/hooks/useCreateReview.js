import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";
import { Alert } from "react-native";

const useCreateReview = () => {
  const client = useApolloClient()
  const navigate = useNavigate()
    const [mutate, result] = useMutation(CREATE_REVIEW, {
        onError: (error) => {
            Alert.alert(error.message)
          }
      });
  
    const createReview = async ({ ownerName, rating, repositoryName, text }) => {
        let {data} = await mutate({ variables: { review: { ownerName, rating: parseInt(rating), repositoryName, text } }})
        client.resetStore()
        data && data.createReview ? navigate(`/${data.createReview.repositoryId}`) : null
    };
  
    return [createReview, result];
  };

export default useCreateReview