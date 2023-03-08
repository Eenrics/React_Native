import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { View, Pressable } from 'react-native'
import styles from "./styles";

const ReviewForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
        <FormikTextInput name="repoName" placeholder="Repository name"  />
        <FormikTextInput name="rate" placeholder="Rate between 0 and 100"  />
        <FormikTextInput name="review" placeholder="Review" multiline={true} />
        <Pressable onPress={onSubmit}>
          <Text style={styles.button}>Create a review</Text>
        </Pressable>
      </View>
    );
  };

  export default ReviewForm