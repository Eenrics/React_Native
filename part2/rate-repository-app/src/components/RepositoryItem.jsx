import Text from "./Text";
import { Image, View } from "react-native";
import NumValView from "./NumValView";

const RepositoryItem = ({value}) => {
  
    const style = {color: 'primary', fontSize: 'subheading', fontWeight: 'bold'}
    return (
        <View style={{borderBottomWidth: 9, borderColor: '#aaa', paddingTop: 7, paddingBottom: 7}}>
          <View style={{flexDirection: 'row'}}>
              <Image source={{uri: value.ownerAvatarUrl}} style={{width: 60, height: 60, borderRadius: 10, margin: 10}}/>
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text {...style} style={{fontSize: 21}}>{value.fullName}</Text>
                  <Text style={{paddingTop: 4, width: 250, fontSize: 16}}>{value.description}</Text>
              </View>
          </View>

          <Text style={{backgroundColor: '#0366d6', color: 'white', padding: 8, marginRight: 'auto', borderRadius: 3, marginLeft: 80}}>{value.language}</Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10}}>
            <NumValView val={value.stargazersCount} txt={'Stars'} />
            <NumValView val={value.forksCount} txt={'Forks'} />
            <NumValView val={value.reviewCount} txt={'Review'} />
            <NumValView val={value.ratingAverage} txt={'Rate'} />
          </View>
        </View>
    )
}

export default RepositoryItem