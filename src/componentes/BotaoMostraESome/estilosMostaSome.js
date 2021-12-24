import { StyleSheet } from 'react-native';
import { cores } from '../../estilosGerais';

export default StyleSheet.create({
  divisor: {
    marginHorizontal: 24,
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
    borderRadius: 5,
},
});