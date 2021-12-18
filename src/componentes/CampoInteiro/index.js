import React from 'react';

import { TextInput, View } from 'react-native';
import estilos from './estilos';

export default function CampoInteiro({valor,acao}){
    const atualiza = (novoValor,acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if(!verificaInteiro) return;
        const verificaTamanho = parseInt(novoValor);
        console.log(verificaTamanho+1)
        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
        retornaComoNumero(removeZeroEsquerda,acaoRetorno);   
    }

    const retornaComoNumero = (texto,acaoRetorno) => {
        if(!texto) acaoRetorno(0);
        else acaoRetorno(parseInt(texto));
    }
    
    const numeroEmTexto = String(valor);

    return <View>
    
        <TextInput
            style={estilos.campo}
            keyboardType='number-pad'
            selectTextOnFocus
            value={numeroEmTexto}
            onChangeText={(evento)=>{atualiza(evento,acao)}}
        />
    </View>
}