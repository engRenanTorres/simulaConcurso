import React, {useState} from 'react';

import { Text, View } from 'react-native';
import estilos from './estilos';
import Alternativas from '../AlternativasVerificadas';

export default function QuestaoResolvida({id, enunciado,alternativas,respostas,alternativasMarcadas}) {
    
    const alternativaMarcada = alternativasMarcadas; 

    return (
    <View style={estilos.informacao}>
        <Text style={estilos.enunciado}> {enunciado} </Text>
        <View style={estilos.divisor}/>
        <View style={estilos.opcoes}>
            <Alternativas  
                alternativaMarcada={alternativaMarcada} 
                id2={id-1} 
                alternativas={alternativas}
                resposta={respostas}
            />
        </View>
    </View>
    )
}