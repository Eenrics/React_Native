import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";
import { Alert } from "react-native";

const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP, {
        onError: (error) => {
            Alert.alert(error.graphQLErrors[0].message)
          }
      });
  
    const signUp = async ({ username, password }) => {
        await mutate({ variables: { username, password } })
    };
  
    return [signUp, result];
  };

export default useSignUp