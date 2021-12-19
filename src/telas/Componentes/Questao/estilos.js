import { StyleSheet } from "react-native";
import { cores } from "../../../estilos";

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
        backgroundColor: '#FFF',
        color: '#000',
        fontSize: 16,
        textAlignVertical: 'top',
        paddingBottom: 20,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: cores.cinza,
        marginBottom:10,
    },
    opcoes: {
      textAlign: 'justify',
    },
});