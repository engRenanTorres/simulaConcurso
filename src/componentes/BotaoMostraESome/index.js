import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import estilosMostaSome from './estilosMostaSome';

export default function BotaoMostraESome({children, ativador,alteraAtivador,txtAtivo, txtDesativo}){

    return <View>
        <View style={estilosMostaSome.divisor}/>
        <View>
        <TouchableOpacity onPress={()=>alteraAtivador(!ativador)}>
                <Text style={estilosMostaSome.botoesAtivador}> {!ativador? txtDesativo: txtAtivo}  </Text>
        </TouchableOpacity>
        {ativador && <View>
                <Text>{children}</Text>
            </View>}
        </View>
        <View style={estilosMostaSome.divisor}/>
    </View>
}