import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';

export default function BotoesPassadores ({numeroQuestao,alteraQuestao,quantidadeDeQuestoesNoTeste}) {
    const primeiraQuestao = numeroQuestao == 0? true:false;

    return(
        <View style={estilos(primeiraQuestao).containerPassadores}>       
            {!primeiraQuestao && 
                <TouchableOpacity 
                    onPress={()=>alteraQuestao(-1,quantidadeDeQuestoesNoTeste)} 
                >
                    <Text style={estilos(false).botoesPassadores}> Anterior </Text>
                </TouchableOpacity>
            }
            {numeroQuestao<(quantidadeDeQuestoesNoTeste-1) && 
                <TouchableOpacity 
                    onPress={()=>alteraQuestao(+1,quantidadeDeQuestoesNoTeste)}
                >
                <Text style={estilos(false).botoesPassadores}> Próxima </Text>
                </TouchableOpacity>
            }
        </View> 
    )
}