import { StyleSheet } from "react-native";
import { cores } from "../../estilosGerais";

export default StyleSheet.create({
    preencher: {
        flex:1,
        justifyContent: 'center',
        marginVertical: 10,
    },
    fotoPerfil:{
        width:120,
        height: 161,
        marginLeft:'35%',
        marginVertical:12,
        borderRadius:24
    },
    titulo2: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    texto: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 12,
    },
    links: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: cores.azul,
        borderRadius: 24,
        marginTop: 10,
        marginHorizontal: 84,
        paddingVertical: 8,
    },
});
