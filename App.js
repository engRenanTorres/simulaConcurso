import React from 'react';
import Simulado from './src/telas/Simulado';
import Configuracao from './src/telas/Configuracao';
import {SafeAreaView, StatusBar} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      {/* <Configuracao/> */}
      <Simulado/>
    </SafeAreaView>
  );
}


