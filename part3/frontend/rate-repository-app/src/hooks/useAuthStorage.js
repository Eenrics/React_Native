import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useAuthStorage = () => {
    const auth = useContext(AuthStorageContext)
    console.log(auth)
    // return ['auth']
}

export default useAuthStorage