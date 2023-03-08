import SignUpForm from "./SignUpForm";
import { Formik } from "formik";
import * as yup from 'yup';
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import { Alert } from "react-native";

const initialValues = {
    username: '',
    password: '',
    cpassword: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'Username must be atleast 1 character long')
    .max(30, 'Username must be atmost 30 characters long'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be atleast 5 characters long')
    .max(50, 'Password must be atmost 50 characters long'),
  cpassword: yup
    .string()
    .oneOf([yup.ref('password'), null],'Password do not match')
    .required('Password confirmation is required')

});

const SignUp = () => {
    const [signUp] = useSignUp()
    const [signIn] = useSignIn()

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
          await signUp({username, password})
          await signIn({username, password})
        } catch(e) {
          Alert.alert('error', e)
        }
      };
    
      return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
      );
};

export default SignUp;