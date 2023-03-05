// import { Pressable, Alert } from "react-native"
import Text from "./Text"
import styles from "./styles"

const AppBarTab = (props) => {
    return (
    <Text style={styles.item} fontSize='subheading' fontWeight='bold'>{props.value}</Text>
)
}

export default AppBarTab
