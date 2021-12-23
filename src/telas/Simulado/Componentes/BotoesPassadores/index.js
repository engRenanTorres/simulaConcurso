import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';

export default function BotoesPassadores ({numeroQuestao,alteraQuestao,quantidadeDeQuestoesNoTeste,alternativasMarcadas,novaOrdemDasQuestoes}) {
    const primeiraQuestao = numeroQuestao == 0? true:false;
    const ultimaQuestao = numeroQuestao ==(quantidadeDeQuestoesNoTeste-1)? true:false;
    const navigation = useNavigation();
    const transferir = {
        questoesMarcadas: alternativasMarcadas,
        novaOrdemDasQuestoes: novaOrdemDasQuestoes
    }

    return(
        <View style={estilos(primeiraQuestao).containerPassadores}>       
            {!primeiraQuestao && 
                <TouchableOpacity 
                    onPress={()=>alteraQuestao(-1,quantidadeDeQuestoesNoTeste)} 
                >
                    <Text style={estilos(false).botoesPassadores}> Anterior </Text>
                </TouchableOpacity>
            }
            {ultimaQuestao && 
                <TouchableOpacity 
                    onPress={()=>navigation.push('Corrigir',transferir)}
                >
                <Text style={estilos(false).botoesPassadores}> Corrigir Simulado </Text>
                </TouchableOpacity>
            }
            {!ultimaQuestao && 
                <TouchableOpacity 
                    onPress={()=>alteraQuestao(+1,quantidadeDeQuestoesNoTeste)}
                >
                <Text style={estilos(false).botoesPassadores}> Próxima </Text>
                </TouchableOpacity>
            }
        </View> 
    )
}