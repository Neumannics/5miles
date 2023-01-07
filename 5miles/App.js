import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , Image} from 'react-native';
import Input from './input.js'

export default function App() {


  return (
    <View style={styles.container}>
      <Image source={require('./assets/5miles-logo.png')} style={{ width: 310, height: 310 , borderRadius:40 }} />
      <Input />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20D789',
    alignItems: 'center',
    justifyContent: 'center',
    
  },


})
