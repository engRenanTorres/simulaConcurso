import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import estilosPass from './estilosPass';

export default function BotaoPassadorSimples({children, minimo,maximo, valor,acao,variacao}){

    return <View>
        <View style={estilosPass.qualQuestao}>
            <TouchableOpacity onPress={()=> {if(valor > minimo) acao(valor-variacao);}}>
                <Text style={estilosPass.botoesPassadores}> {valor > minimo? "<": ""} </Text>
            </TouchableOpacity>
            <Text style={estilosPass.textoPassadores}> {children} </Text> 
            <TouchableOpacity onPress={()=>{if(valor < maximo) acao(valor+variacao)}}>
                <Text style={estilosPass.botoesPassadores}> {valor+variacao<=(maximo)?">":""} </Text>
            </TouchableOpacity>
        </View>
    </View>
}