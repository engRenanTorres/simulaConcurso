import { StyleSheet } from 'react-native';
import { cores } from '../../../../estilos';

export default (correta) => StyleSheet.create({
  alternativaMarcada: {
    width: '100%',
    paddingVertical: 9,
    paddingHorizontal: 20,
    backgroundColor: correta? cores.claro: cores.vermelho,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius:4,
    borderWidth: correta? 0: 6,
    margin: 2,
    
  },
  
  textoMarcado: {
    fontWeight: 'bold',
    textAlign: 'justify',
    color: correta? cores.azul : cores.claro,
  },

});