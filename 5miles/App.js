import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/5miles-logo.png')} style={{ width: 40, height: 40 }} />

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
