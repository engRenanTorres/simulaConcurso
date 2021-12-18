import { StyleSheet } from 'react-native';
import { cores } from '../../../../estilos';

export default StyleSheet.create({
  alternativaMarcada: {
    width: '100%',
    paddingVertical: 9,
    paddingHorizontal: 20,
    backgroundColor: cores.azul,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius:4,
    borderWidth: 6,
    margin: 2,
    
  },
  alternativaDesmarcada: {
    width: '100%',
    paddingVertical: 9,
    paddingHorizontal: 20,
    backgroundColor: cores.claro,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius:4,
    borderWidth:  0,
    margin: 2,
    
  },
  
  textoMarcado: {
    fontWeight: 'bold',
    textAlign: 'justify',
    color: cores.claro,
  },
  textoDesmarcado: {
    fontWeight: 'bold',
    textAlign: 'justify',
    color: cores.azul,
  }
});