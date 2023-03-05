import { Pressable, Alert } from "react-native"
import Text from "./Text"
import styles from "./styles"

const AppBarTab = (props) => {
    return (<Pressable onPress={props.cmd ? props.cmd : () => Alert.alert('button pressed')}>
    <Text style={styles.item} fontSize='subheading' fontWeight='bold'>{props.value}</Text>
</Pressable>)
}

export default AppBarTab
