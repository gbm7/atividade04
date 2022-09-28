import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, createElement } from 'react-native';


export default function App() {
  const [textoInicial, setTextoInicial] = useState("");

  const boasVindas = () => {
   setTextoInicial("Seja bem-vindo!");
  }
  
  const [textoAleatorio, setTextoAleatorio] = useState("")
  const aleatorias =() => {
    let frases = ["Tudo bem?", "Olá, eu sou a Gabi", "Olá, sou eu", "O ciclo da vida e da morte continuam."]
    setTextoAleatorio(frases[Math.floor(Math.random() * frases.length)]);
  }

  return (
    <View style={styles.container}>
      <StatusBar> </StatusBar>
      <Text style={{color:"white", fontsize:70, margin: 20}}>
        {textoInicial}
    </Text>
     
    <Text style={{color:"white", fontsize:70, margin: 20}}>
        {textoAleatorio}
    </Text>
      
      <Text style={{color:"white", fontsize:70, margin: 20}}>
        Olá Mundo!</Text>
      
      <StatusBar style="auto" />
      <Button title='clique aqui :)' onPress={boasVindas}/>
      <Button title= ' frases'onPress={aleatorias}/>
    

    </View>
  );
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC7CDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
