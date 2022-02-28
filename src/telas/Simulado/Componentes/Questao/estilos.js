import { StyleSheet } from "react-native";
import { cores } from "../../../../estilosGerais";

export default StyleSheet.create({
    informacao: {
        padding: 5,
      },
    qualQuestao:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    enunciado: {
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
});