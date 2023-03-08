import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { View, Pressable } from 'react-native'
import styles from "./styles";

const SignUpForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <FormikTextInput name="cpassword" placeholder="Password" secureTextEntry />
        <Pressable onPress={onSubmit}>
          <Text style={styles.button}>Sign up</Text>
        </Pressable>
      </View>
    );
  };

  export default SignUpForm