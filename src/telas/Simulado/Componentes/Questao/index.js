import React, {useState} from 'react';

import { Text, View } from 'react-native';
import estilos from './estilos';
import Alternativas from '../Alternativas';

export default function Questao({id, enunciado,alternativas,answer,atualizaRespostas}) {
    
    // let bsc = []; bsc = [...bsc,6]; bsc = [...bsc,6]; bsc = [...bsc,6];
    const [alternativaMarcada,setAlternativaMarcada] = useState([6,6,6,6]); 

    return (
    <View style={estilos.informacao}>
        <Text style={estilos.enunciado}> {enunciado} </Text>
        <View style={estilos.divisor}/>
        <View style={estilos.opcoes}>
            <Alternativas 
                acao={setAlternativaMarcada} 
                alternativaMarcada={alternativaMarcada} 
                id2={id} 
                alternativas={alternativas}
                // resposta={atualizaRespostas}
            />
        </View>
    </View>
    )
}