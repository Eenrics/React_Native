import { Pressable } from "react-native"
import Text from "./Text"
import styles from "./styles"

const Button = ({text, action, param, danger, min}) => {
    const extra = {
        backgroundColor: danger ? '#ef4e33' : '#0366d6',
        width: min ? 150 : 335,
        fontSize: min ? 17 : 20
    }
    return ( 
        <Pressable onPress={() => action(param)}>
            <Text style={[styles.button, extra]}>{text}</Text>
          </Pressable>
     );
}
 
export default Button;