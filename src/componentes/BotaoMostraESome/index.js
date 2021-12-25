import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import estilosMostraSome from './estilosMostraSome';

export default function BotaoMostraESome({children, ativador,alteraAtivador,txtAtivo, txtDesativo}){

    return <View>
        <View>
        <TouchableOpacity onPress={()=>alteraAtivador(!ativador)}>
                <Text style={estilosMostraSome.botoesAtivador}> {!ativador? txtDesativo: txtAtivo}  </Text>
        </TouchableOpacity>
        {ativador && <View>
                <Text style={estilosMostraSome.textoInterno}>{children}</Text>
            </View>}
        </View>
        <View style={estilosMostraSome.divisor}/>
    </View>
}