import React, { useState } from 'react';

import { TouchableOpacity, Text, View } from 'react-native';
import estilos from './estilos';

export default function CabecalhoDaQuestao({indiceQuestao,totalDeQuestoes,acao}) {
        
    return (
    <View style={estilos.informacao}>
        <View style={estilos.qualQuestao}>
            <TouchableOpacity onPress={()=>acao(-1,totalDeQuestoes)}>
                <Text> {"<"} </Text>
            </TouchableOpacity>
            <Text>Questão {(indiceQuestao+1)} de {totalDeQuestoes}  </Text> 
            <TouchableOpacity onPress={()=>acao(+1,totalDeQuestoes)}>
                <Text> {">"} </Text>
            </TouchableOpacity>

            {/*<CampoInteiro valor={numeroQuestao} acao={setNumeroQuestao} totalDeQuestoes={totalDeQuestoes}/>*/} 
        </View>
    </View>
    )
}