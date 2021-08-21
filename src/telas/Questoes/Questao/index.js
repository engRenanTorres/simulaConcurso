import React, {useState} from 'react';

import { Text, View } from 'react-native';
import estilos from './estilos';
import Alternativas from '../../../componentes/Alternativas';

export default function Questao({id, enunciado,alternativas,answer}) {
    
    const [alternativaMarcada,setAlternativaMarcada] = useState([]);

    return (
    <View style={estilos.informacao}>
        <Text style={estilos.enunciado}> {enunciado} </Text>
        <View style={estilos.divisor}/>
        <View style={estilos.opcoes}>
            <Alternativas 
                acao={setAlternativaMarcada} 
                checado={alternativaMarcada} 
                id2={id} 
                alternativas={alternativas}
            />
        </View>
    </View>
    )
}