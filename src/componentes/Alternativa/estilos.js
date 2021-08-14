import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default (pequeno, apertado) => StyleSheet.create({
  alternativa: {
    width: '100%',
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: apertado ? cores.laranja : cores.roxo,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius:4,
    margin: 2,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: apertado ? cores.roxo : cores.laranja,
  }
});