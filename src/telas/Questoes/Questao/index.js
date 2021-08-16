import React, {useState} from 'react';

import { Text, View } from 'react-native';
import estilos from './estilos';
import Alternativa from '../../../componentes/Alternativa';

export default function Questao({enunciado,opcao1,opcao2,opcao3,opcao4,answer}) {
    const [marcarAlt,setMarcarAlt] = useState(0);

    return (
    <View style={estilos.informacao}>
        <Text style={estilos.enunciado}> {enunciado} </Text>
        <View style={estilos.divisor}/>
        <View style={estilos.opcoes}>
            <Alternativa acao={setMarcarAlt} checado={marcarAlt} valor={`a) ${opcao1}`} /> 
            <Alternativa acao={setMarcarAlt} checado={marcarAlt} valor={`b) ${opcao2}`} />
            <Alternativa acao={setMarcarAlt} checado={marcarAlt} valor={`c) ${opcao3}`} />
            <Alternativa acao={setMarcarAlt} checado={marcarAlt} valor={`d) ${opcao4}`} />
        </View>
    </View>
    )
}