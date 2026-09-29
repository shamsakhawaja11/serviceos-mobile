import { StatusBar, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import Login from './src/screens/Login'
export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.main}>
      <Login/>
    </View>
  );
}
const styles=StyleSheet.create({
  main:{
    width:'100%',
    height:'100%',
    backgroundColor:'dark'
  }
})
 
