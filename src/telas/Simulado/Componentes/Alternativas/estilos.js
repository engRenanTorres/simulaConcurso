import { StyleSheet } from 'react-native';
import { cores } from '../../../../estilosGerais';

export default (marcado) => StyleSheet.create({
  alternativaMarcada: {
    width: '100%',
    paddingVertical: 9,
    paddingHorizontal: 20,
    backgroundColor: marcado? cores.azul : cores.claro,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius:4,
    borderWidth: marcado? 6 : 0,
    margin: 2,
    
  },
  
  textoMarcado: {
    fontWeight: 'bold',
    textAlign: 'justify',
    color: marcado? cores.claro : cores.azul,
  },

});