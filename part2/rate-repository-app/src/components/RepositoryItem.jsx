import Text from "./Text";
import { Image, View } from "react-native";

const RepositoryItem = ({value}) => {

    console.log(value.ownerAvatarUrl)
    
    const style = {color: 'primary', fontSize: 'subheading', fontWeight: 'bold'}
    return (
      <> 
        <View style={{flexDirection: 'row'}}>
            <Image source={{uri: value.ownerAvatarUrl}} style={{width: 60, height: 60, borderRadius: 10, margin: 10}}/>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Text {...style}>{value.fullName}</Text>
                <Text style={{paddingTop: 4, width: 250}}>{value.description}</Text>
            </View>
        </View>
        <Text>{value.language}</Text>
        <Text>Stars: {value.stargazersCount}</Text>
        <Text>Forks: {value.forksCount}</Text>
        <Text>Review: {value.reviewCount}</Text>
        <Text>Rate: {value.ratingAverage}</Text>
      </>
    )
}

export default RepositoryItem