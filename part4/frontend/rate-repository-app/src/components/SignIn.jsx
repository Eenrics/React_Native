import SignInForm from "./SignInForm";
import { Formik } from "formik";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be atleast 5 characters')
});

const SignIn = () => {
    const [signIn] = useSignIn()

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
          await signIn({username, password})
        } catch(e) {
          console.log('error', e)
        }
      };
    
      return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      );
};

export default SignIn;