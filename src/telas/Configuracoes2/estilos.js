import { StyleSheet,Dimensions } from "react-native";
import { cores } from "../../estilosGerais";

export default (marcado) => StyleSheet.create({
    informacao: {
        padding: 5,
      },
    qualQuestao:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    enunciado: {
        backgroundColor: cores.quaseBranco,
        color: '#000',
        fontSize: 16,
        textAlignVertical: 'top',
        paddingBottom: 20,
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlign: 'justify'
    },
    opcoes: {
      textAlign: 'justify',
    },
    botoesFiltro:{
      fontWeight: marcado? 'normal':'bold',
      borderColor: marcado? '#000' : cores.quaseBranco,
      borderWidth: 2,
      borderRadius: 10,
      textAlign: 'center',
      color: marcado? '#000' : '#fff',
      backgroundColor: marcado? cores.quaseBranco : cores.azul,
      marginTop: 10,
      width: 100,
      height:55,
      paddingVertical: 8,
    },
    linha:{
      width: Dimensions.get('window').width,
      flexDirection:'row',
      justifyContent: 'space-evenly'
    },
    quadroVariavel:{
      textAlign:'center',
      borderColor: '#000',
      justifyContent: 'center',
  }

});