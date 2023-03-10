import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { View, Pressable } from 'react-native'
import styles from "./styles";

const SignInForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <Pressable onPress={onSubmit}>
          <Text style={styles.button}>Sign in</Text>
        </Pressable>
      </View>
    );
  };

  export default SignInForm