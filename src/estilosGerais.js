import { StyleSheet } from "react-native";

export const cores = {
    roxo: '#A050BE',
    laranja: '#FABE50',
    escuro: '#555555',
    quaseBranco: '#efefef',
    claro: '#fff',
    cinza: '#C7C7C7',
    azul: '#20b2aa',
    vermelho: '#DC143C'
};

export default StyleSheet.create({

    preencher: {
        flex:1,
    },
    titulosTela: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    corpoTextoGeral: {
        fontSize: 16,
        textAlign: 'center',
    },
    botoesNavegacao: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: cores.azul,
        justifyContent: 'space-between',
        borderRadius: 24,
        marginTop: 10,
        marginHorizontal: 84,
        paddingVertical: 8,
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: cores.cinza,
        padding: 10
    },
});
