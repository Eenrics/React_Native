import { View } from "react-native"
import Text from "./Text"

const NumValView = ({val, txt}) => {

    const calculate = (val) => {
      const B = 1000000000
      const M = 1000000
      const K = 1000
      if (val >= B) return `${(val / B).toFixed(1)}b`
      else if (val >= M) return `${(val / M).toFixed(1)}m`
      else if (val >= K) return `${(val / K).toFixed(1)}k`
      else return `${val}`
    } 
  
    return (
      <View>
        <Text fontWeight='bold' style={{fontSize: 17, marginLeft: 'auto',  marginRight: 'auto'}}>{calculate(val)}</Text>
        <Text style={{fontSize: 19, color: 'gray'}}>{txt}</Text>
      </View>
    )
  }

  export default NumValView