import { StyleSheet } from "react-native";
import { cores } from "../../../../estilosGerais";

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
      borderWidth: marcado? 2: 2,
      borderRadius: 24,
      textAlign: 'center',
      color: marcado? '#000' : '#fff',
      backgroundColor: marcado? cores.quaseBranco : cores.azul,
      justifyContent: 'center',
      marginTop: 10,
      marginHorizontal: 84,
      paddingVertical: 8,
    }
});