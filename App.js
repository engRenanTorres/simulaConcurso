import React from 'react';
import Questoes from './src/telas/Questoes';
import {SafeAreaView, StatusBar} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Questoes/>
    </SafeAreaView>
  );
}


