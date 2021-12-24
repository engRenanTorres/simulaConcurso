import React, {useState} from 'react';

import { Text, View } from 'react-native';
import estilos from './estilos';
import Alternativas from '../AlternativasVerificadas';
import BotaoMostraESome from '../../../../componentes/BotaoMostraESome';

export default function QuestaoResolvida({id,enunciado,alternativas,resposta,alternativasMarcadas,observacao}) {

    const alternativaMarcada = alternativasMarcadas; 
    const [mostraComentario,setMostraComentario] = useState(false);

    return (
    <View style={estilos.informacao}>
        <Text style={estilos.enunciado}> {enunciado} </Text>
        <View style={estilos.divisor}/>
        <View style={estilos.opcoes}>
            <Alternativas  
                alternativaMarcada={alternativaMarcada} 
                id2={id-1} 
                alternativas={alternativas}
                resposta={resposta.charCodeAt(0)-65}
            />
        </View>
        <BotaoMostraESome 
            ativador={mostraComentario} 
            alteraAtivador={setMostraComentario}
            txtAtivo={"Esconder comentário"}
            txtDesativo={"Mostrar comentário do autor"}>
            {observacao}
        </BotaoMostraESome>
    </View>
    )
}