import SignInForm from "./SignInForm";
import { Formik } from "formik";

const initialValues = {
    username: '',
    password: ''
}

const SignIn = () => {
    const onSubmit = values => {
        const username = values.username;
        const password = values.password;
    
        console.log(username, password)
      };
    
      return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      );
};

export default SignIn;