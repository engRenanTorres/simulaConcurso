import React, { useState } from 'react';

import { TouchableOpacity, Text, View } from 'react-native';
import BotaoMostraESome from '../../../componentes/BotaoMostraESome';
import estilos from './estilos';

export default function CabecalhoDaQuestao({indiceQuestao,totalDeQuestoes,acao,id, ano,banca, concurso,nivel,cargo}) {
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
        <BotaoMostraESome ativador={mostraInformacoes}
            alteraAtivador={setMostraInformacoes}
            txtAtivo={"Esconder Informações"}
            txtDesativo={"Informações sobre a questão"}>
            <View>
                <Text>id: {id}</Text>
                <Text>Concurso: {concurso}</Text>
                <Text>Banca: {banca}</Text>
                <Text>Ano: {ano}</Text>
                <Text>Nível: {nivel}</Text>
                <Text>Cargo: {cargo}</Text>
            </View>
        </BotaoMostraESome>
    </View>
    )
}