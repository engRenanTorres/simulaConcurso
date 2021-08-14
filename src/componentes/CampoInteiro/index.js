import React from 'react';

import { TextInput } from 'react-native';
import estilos from './estilos';

export default function CampoInteiro({valor,acao}){
    const atualiza = (novoValor,acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if(!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
        acaoRetorno(removeZeroEsquerda);
    }
    
    const numeroEmTexto = String(valor);

    return <TextInput
    style={estilos.campo}
    keyboardType='number-pad'
    selectTextOnFocus
    value={numeroEmTexto}
    onChangeText={(evento)=>{atualiza(evento,acao)}}
    />
}