import SignInForm from "./SignInForm";
import { Formik } from "formik";
import * as yup from 'yup';

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
    .min(6, 'Password must be atleast 6 characters')
});

const SignIn = () => {
    const onSubmit = values => {
        const username = values.username;
        const password = values.password;
    
        console.log(username, password)
      };
    
      return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      );
};

export default SignIn;