import { StyleSheet } from "react-native";
import { cores } from "../../../estilosGerais";

export default StyleSheet.create({
    informacao: {
        padding: 20
      },
    qualQuestao:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',     
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: cores.cinza,
        padding: 10
    },
    botoesPassadores: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff',
        backgroundColor: cores.azul,
        justifyContent: 'space-between',
        borderRadius: 5,
    },
});