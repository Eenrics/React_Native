import { useMutation } from "@apollo/client";
import { LOG_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";
import { Alert } from "react-native";

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()
  const navigate = useNavigate()
    const [mutate, result] = useMutation(LOG_IN, {
        onError: (error) => {
            Alert.alert(error.graphQLErrors[0].message)
          }
      });
  
    const signIn = async ({ username, password }) => {
        let {data} = await mutate({ variables: { username, password } })
        await authStorage.setAccessToken(data.authenticate.accessToken)
        client.resetStore()
        navigate('/')
    };
  
    return [signIn, result];
  };

export default useSignIn