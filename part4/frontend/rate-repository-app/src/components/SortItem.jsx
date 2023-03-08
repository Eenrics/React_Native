import {Picker} from '@react-native-picker/picker';

const RATING_AVERAGE = 'RATING_AVERAGE'
export const CREATED_AT = 'CREATED_AT'
const ASC = 'ASC'
export const DESC = 'DESC'

const SortItem = ({order, setOrder}) => {
  return <Picker
  style={{
    height: 45, 
    margin: 3,
    borderColor: 'white',
    backgroundColor: '#eee',
    paddingLeft: 15,
    fontSize: 17
  }}
  selectedValue={JSON.stringify(order)}
  onValueChange={(itemValue) =>
    {console.log(itemValue)
    setOrder(JSON.parse(itemValue))}
  }>
  <Picker.Item label='Select an item...' enabled={false}/>
  <Picker.Item label={'Latest respositories'} value={JSON.stringify({sort: CREATED_AT, orderby: DESC})} />
  <Picker.Item label={'Highest rating repositories'} value={JSON.stringify({sort: RATING_AVERAGE, orderby: DESC})} />
  <Picker.Item label={'Lowest rating repositories'} value={JSON.stringify({sort: RATING_AVERAGE, orderby: ASC})} />
</Picker>
}

export default SortItem