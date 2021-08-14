import React, { useState } from 'react';

import { Button, Text, View } from 'react-native';
import CampoInteiro from '../../../componentes/CampoInteiro';
import estilos from './estilos';
import Alternativa from '../../../componentes/Alternativa';

export default function Questao({enunciado,opcao1,opcao2,opcao3,opcao4}) {
    const [numeroQuestao,setNumeroQuestao] = useState(1);

    return (
    <View style={estilos.informacao}>
        <View style={estilos.qualQuestao}>
            <Text>Questão  </Text> 
            <CampoInteiro valor={numeroQuestao} acao={setNumeroQuestao}/>
            <Text> de X  </Text> 
        </View>
        <Text style={estilos.enunciado}> {enunciado} </Text>
        <View style={estilos.divisor}/>
        <View style={estilos.opcoes}>
            <Alternativa acao={()=>{}} valor={`a) ${opcao1}`} /> 
            <Alternativa acao={()=>{}} valor={`b) ${opcao2}`} style={estilos.alternativa}/>
            <Alternativa acao={()=>{}} valor={`c) ${opcao3}`} style={estilos.alternativa}/>
            <Alternativa acao={()=>{}} valor={`d) ${opcao4}`} style={estilos.alternativa}/>
        </View>
    </View>
    )
}