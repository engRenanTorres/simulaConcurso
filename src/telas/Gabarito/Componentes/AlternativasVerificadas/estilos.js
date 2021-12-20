import { StyleSheet } from 'react-native';
import { cores } from '../../../../estilos';

export default (correta) => StyleSheet.create({
  alternativaMarcada: {
    width: '100%',
    paddingVertical: 9,
    paddingHorizontal: 20,
    backgroundColor: correta==0? (correta==2? cores.azul :cores.claro): (correta==1? cores.vermelho : cores.azul),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius:4,
    borderColor: correta==2? cores.laranja : '#000',
    borderWidth: correta==0 || correta ==3 ? 0: 6,
    margin: 2,
  },
  textoMarcado: {
    fontWeight: 'bold',
    textAlign: 'justify',
    color: correta==0? cores.azul : cores.claro,
  },

});