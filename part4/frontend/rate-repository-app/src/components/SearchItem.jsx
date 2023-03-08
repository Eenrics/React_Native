import { SearchBar } from '@rneui/themed';

const SearchItem = ({search, setSearch}) => {
  return (
    <SearchBar
         placeholder="Search Here..."
         onChangeText={(text) => setSearch(text)}
         value={search}
         cancelButtonTitle='Cancel'
         onCancel={() => setSearch('')}
         style={{backgroundColor: 'white', borderRadius: 10, padding: 8}}
  /> )
}

export default SearchItem