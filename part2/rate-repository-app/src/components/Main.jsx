import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Text from './Text';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text color='textSecondary' fontSize='subheading' fontWeight='bold'>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

// import { Text, View, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   text: {
//     paddingTop: 40,
//     color: 'grey',
//     fontSize: 14,
//   },
//   blueText: {
//     color: 'blue',
//   },
//   bigText: {
//     fontSize: 24,
//     fontWeight: '700',
//   },
// });

// const FancyText = ({ isBlue, isBig, children }) => {
//   const textStyles = [
//     styles.text,
//     isBlue && styles.blueText,
//     isBig && styles.bigText,
//   ];

//   return <Text style={textStyles}>{children}</Text>;
// };

// const Main = () => {
//   return (
//     <>
//       <FancyText>Simple text</FancyText>
//       <FancyText isBlue>Blue text</FancyText>
//       <FancyText isBig>Big text</FancyText>
//       <FancyText isBig isBlue>
//         Big blue text
//       </FancyText>
//     </>
//   );
// };

export default Main;