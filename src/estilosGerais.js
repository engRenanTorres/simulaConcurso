import { StyleSheet,Dimensions } from "react-native";

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
        width: 136,
        backgroundColor: cores.azul,
        borderRadius: 24,
        marginTop: 10,
        marginHorizontal: 84,
        paddingVertical: 8,
    },
    botoesPrincipais: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        width: 136,
        backgroundColor: cores.roxo,
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
    linhaMenu:{ 
        width: Dimensions.get('window').width,
        flexDirection:'row',
        justifyContent: 'space-evenly',
    }
});
