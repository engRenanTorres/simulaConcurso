import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import estiloPadrao from './estilos';

export default function Alternativas({alternativaMarcada, acao, id2, alternativas,resposta}){
    
    return  <>
        { alternativas.map((alternativa,index) => 
            <TouchableOpacity 
            key = {index}
            onPress={()=>{
                let bsc = [...alternativaMarcada]; 
                bsc[id2] = index; 
                acao(bsc);
                // resposta(index,id2);
            }}
            style={ alternativaMarcada[id2]==index? estiloPadrao(true).alternativaMarcada : estiloPadrao(false).alternativaMarcada}>
                <Text style={ alternativaMarcada[id2]==index? estiloPadrao(true).textoMarcado : estiloPadrao(false).textoMarcado }> {alternativa} </Text>
            </TouchableOpacity>
        )}
    </>
}