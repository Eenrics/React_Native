import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import theme from '../theme';

import TextInput from './TextInput';
import Text from './Text';

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const styles = StyleSheet.create({
    errorText: {
      marginTop: 5,
      color: '#d73a4a',
      paddingLeft: 6,
      fontFamily: theme.fonts.main
    },
    input: {
      borderWidth: 2,
      borderColor: !showError ? 'gray' : '#d73a4a',
      borderRadius: 4,
      margin: 10,
      padding: 5,
      fontSize: 18,
      backgroundColor: '#eee'
  }
  });

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.input}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;