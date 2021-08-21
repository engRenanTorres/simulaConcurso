import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import estiloPadrao from './estilos';

export default function Alternativas({checado, acao, id2, alternativas,resposta}){

    
    return  <>
        { alternativas.map((alternativa,index) => 
            <TouchableOpacity 
            key = {index}
            onPress={()=>{
                acao(index);
                // resposta(index,id2);
            }}
            style={ checado==index? estiloPadrao.alternativaMarcada : estiloPadrao.alternativaDesmarcada}>
                <Text style={ checado==index? estiloPadrao.textoMarcado : estiloPadrao.textoDesmarcado }> {alternativa} </Text>
            </TouchableOpacity>
        )}
    </>
}