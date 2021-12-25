import React from 'react';

import { Text, View } from 'react-native';
import estilos from './estilos';
import Alternativas from '../Alternativas';

export default function Questao({numeroQuestao, enunciado,alternativas,alternativasMarcadas,acaoDeMarcar}) {
    
    return (
        <View style={estilos.informacao}>
            <Text style={estilos.enunciado}> {enunciado} </Text>
            <View style={estilos.divisor}/>
            <View style={estilos.opcoes}>
                <Alternativas 
                    acao={acaoDeMarcar} 
                    alternativaMarcada={alternativasMarcadas} 
                    id2={numeroQuestao} 
                    alternativas={alternativas}
                />
            </View>
        </View>
    )
}