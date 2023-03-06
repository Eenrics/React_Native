import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

// import AuthStorage from "../utils/authStorage";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const useSignOut = () => {
  const authStorage = useContext(AuthStorageContext)
  const client = useApolloClient()
  const navigate = useNavigate()

    const signOut = async () => {
        await authStorage.removeAccessToken()
        client.resetStore()
        navigate('/signin')
    };
  
    return signOut
  };

export default useSignOut