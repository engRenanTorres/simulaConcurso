import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import estilosPass from './estilosPass';

export default function Checador({condicional,acao}){

    return <View style={estilosPass.qualQuestao}>
            <TouchableOpacity onPress={()=>acao(!condicional)}>
                <Text style={estilosPass.botoesPassadores}> {condicional? "  " : " X "} </Text>
            </TouchableOpacity>
        </View>
}