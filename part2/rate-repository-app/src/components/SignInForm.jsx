import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { View, Pressable, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0366d6',
        color: 'white',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        padding: 7,
        borderRadius: 4
    }
})

const SignInForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <Pressable onPress={() => {
            onSubmit()
        }}>
          <Text style={styles.button}>Sign in</Text>
        </Pressable>
      </View>
    );
  };

  export default SignInForm