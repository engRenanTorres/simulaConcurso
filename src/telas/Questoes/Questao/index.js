import React from 'react';

import { Text, View } from 'react-native';
import estilos from './estilos';
import Alternativa from '../../../componentes/Alternativa';

export default function Questao({enunciado,opcao1,opcao2,opcao3,opcao4}) {
    return (
    <View style={estilos.informacao}>
        <Text style={estilos.enunciado}> {enunciado} </Text>
        <View style={estilos.divisor}/>
        <View style={estilos.opcoes}>
            <Alternativa acao={()=>{}} valor={`a) ${opcao1}`} style={estilos.alternativa}/> 
            <Alternativa acao={()=>{}} valor={`b) ${opcao2}`} style={estilos.alternativa}/>
            <Alternativa acao={()=>{}} valor={`c) ${opcao3}`} style={estilos.alternativa}/>
            <Alternativa acao={()=>{}} valor={`d) ${opcao4}`} style={estilos.alternativa}/>
        </View>
    </View>
    )
}