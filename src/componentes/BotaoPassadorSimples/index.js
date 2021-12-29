import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import estilosPass from './estilosPass';

export default function BotaoPassadorSimples({children, minimo,maximo, valor,acao,variacao}){

    return <View>
        <View style={estilosPass.qualQuestao}>
            {valor > minimo && <TouchableOpacity onPress={()=>acao(valor-variacao)}>
                <Text style={estilosPass.botoesPassadores}> {"<"} </Text>
            </TouchableOpacity>}
            <Text style={estilosPass.textoPassadores}> {children} </Text> 
            {valor+variacao<=(maximo) &&<TouchableOpacity onPress={()=>{acao(valor+variacao)}}>
                <Text style={estilosPass.botoesPassadores}> {">"} </Text>
            </TouchableOpacity>}
        </View>
    </View>
}