import { StyleSheet } from "react-native";
import { cores } from "../../estilosGerais";

export default StyleSheet.create({
    estatisticas: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
       
    },
        saudacao: {
       

        marginHorizontal: 24,
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: cores.azul,
        borderRadius: 5,
    },
    botoesAtivador: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: cores.azul,
        borderRadius: 5,
        marginHorizontal: 24,
        paddingVertical: 5,
    },
    resultados: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: cores.azul,
        borderRadius: 5,
        marginHorizontal: 24,
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: cores.cinza,
        padding: 10
      },
      corpoTextoGeral: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
    },
});
