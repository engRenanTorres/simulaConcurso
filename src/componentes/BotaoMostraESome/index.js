import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import estilosMostraSome from './estilosMostraSome';
import { AntDesign } from '@expo/vector-icons';

export default function BotaoMostraESome({children, ativador,alteraAtivador,txtAtivo, txtDesativo}){

    return <View>
        <View>
        <TouchableOpacity onPress={()=>alteraAtivador(!ativador)}>
                <Text style={estilosMostraSome.botoesAtivador}><AntDesign name="infocirlce" size={14} color="white" /> {!ativador? txtDesativo: txtAtivo}  </Text>
        </TouchableOpacity>
        {ativador && <View>
                <Text style={estilosMostraSome.textoInterno}> {children}</Text>
            </View>}
        </View>
        <View style={estilosMostraSome.divisor}/>
    </View>
}