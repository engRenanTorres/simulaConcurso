import { StyleSheet } from "react-native";
import { cores } from "../../../estilos";

export default StyleSheet.create({
    informacao: {
        padding: 24
      },
    qualQuestao:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    enunciado: {
        color: '#aaa',
        fontSize: 16,
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: cores.cinza,
    },
    opcoes: {
      textAlign: 'right',
    },
});