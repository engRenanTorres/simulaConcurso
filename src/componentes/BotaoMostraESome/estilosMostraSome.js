import { StyleSheet } from 'react-native';
import { cores } from '../../estilosGerais';

export default StyleSheet.create({
  divisor: {
    marginHorizontal: 24,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: cores.cinza,
    padding: 10
  },
  botoesAtivador: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: cores.azul,
    justifyContent: 'space-between',
    borderRadius: 14,
    marginTop: 10,
    marginHorizontal: 24,
    paddingVertical: 4,
  },
  textoInterno: {
    marginHorizontal: 24,
    textAlign: 'justify'
  },

});