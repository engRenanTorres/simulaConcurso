import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import funcaoEstiloPadrao from './estilos';

export default function Alternativa({pequeno=false, checado=false, valor,acao}){
    const estiloPadrao= funcaoEstiloPadrao(pequeno, checado);

    return <TouchableOpacity 
    onPress={acao}
    style={estiloPadrao.alternativa}
    >
        <Text style={estiloPadrao.valor}> {valor} </Text>
    </TouchableOpacity>
}