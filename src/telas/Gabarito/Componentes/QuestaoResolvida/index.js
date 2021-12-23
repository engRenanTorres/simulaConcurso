import React, {useState} from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import Alternativas from '../AlternativasVerificadas';

export default function QuestaoResolvida({id,enunciado,alternativas,respostas,alternativasMarcadas,observacao}) {
    
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
                resposta={respostas}
            />
        </View>
        <View style={estilos.divisor}/>
        <View>
        <TouchableOpacity onPress={()=>setMostraComentario(!mostraComentario)}>
                <Text style={estilos.botoesPassadores}> Visualizar comentário do autor </Text>
        </TouchableOpacity>
        {mostraComentario && <View>
                <Text>{observacao}</Text>
            </View>}
        </View>
        <View style={estilos.divisor}/>
    </View>
    )
}