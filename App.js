import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form'
import Titulo from './src/components/Titulo'

export default function App() {
  return (
    <View style={styles.container}>
     <Titulo/>
     <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003F5C',
    paddingTop: 80,
    justifyContent:"center",
   
  },
});
