import React, { useState } from 'react';

import { TouchableOpacity, Text, View } from 'react-native';
import estilos from './estilos';

export default function CabecalhoDaQuestao({indiceQuestao,totalDeQuestoes,acao, ano,banca, concurso}) {
    const [mostraInformacoes,setMostraInformacoes] = useState(false);
    return (
    <View style={estilos.informacao}>
        <View style={estilos.qualQuestao}>
            {indiceQuestao>0 && <TouchableOpacity onPress={()=>acao(-1,totalDeQuestoes)}>
                <Text style={estilos.botoesPassadores}> {"<"} </Text>
            </TouchableOpacity>}
            <Text > Questão {(indiceQuestao+1)} de {totalDeQuestoes} </Text> 
            {indiceQuestao<(totalDeQuestoes-1) &&<TouchableOpacity onPress={()=>acao(+1,totalDeQuestoes)}>
                <Text style={estilos.botoesPassadores}> {">"} </Text>
            </TouchableOpacity>}
        </View>
        <View style={estilos.divisor}/>
        <View>
        <TouchableOpacity onPress={()=>setMostraInformacoes(!mostraInformacoes)}>
                <Text style={estilos.botoesPassadores}> Exibir informações sobre a questão </Text>
        </TouchableOpacity>
        {mostraInformacoes && <View>
                <Text>Concurso: {concurso}</Text>
                <Text>Banca: {banca}</Text>
                <Text>Ano: {ano}</Text>
            </View>}
        </View>
        <View style={estilos.divisor}/>
    </View>
    )
}