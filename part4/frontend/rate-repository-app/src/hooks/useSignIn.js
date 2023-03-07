import { useMutation } from "@apollo/client";
import { LOG_IN } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext)
  const client = useApolloClient()
  const navigate = useNavigate()
    const [mutate, result] = useMutation(LOG_IN, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message)
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