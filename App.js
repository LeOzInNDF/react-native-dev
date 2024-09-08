import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image } from 'react-native';
import Capa from './assets/capa-tecnologia.png'
import Logo from './assets/leo.png' // Load a PNG image

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.capa} source={Capa} />
      
    <View style={styles.boxDescricao}>
      <Image style={styles.logo} source={Logo}  />
      
      <Text style={styles.titulo}>Leonardo Siqueira</Text>
      <Text style={styles.cargo}>Software Engineer Full Stack Developer!</Text>
      <Text  style={styles.cargo}>Kotlin | Javascript | Typescript | Dart | Angular | Flutter | Git | Github</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  capa: {
    flex: 1,
  },

  boxDescricao: {
    flex: 1,
    alignItems: 'center'
  },
  
  logo: {

    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
  },

  titulo: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16
  }
});
