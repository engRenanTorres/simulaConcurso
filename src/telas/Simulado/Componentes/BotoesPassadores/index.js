import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { cores } from '../../../../estilosGerais';
import estilos from './estilos';

export default function BotoesPassadores ({numeroQuestao,alteraQuestao,quantidadeDeQuestoesNoTeste,alternativasMarcadas}) {
    const primeiraQuestao = numeroQuestao == 0? true:false;
    const ultimaQuestao = numeroQuestao ==(quantidadeDeQuestoesNoTeste-1)? true:false;
    const navigation = useNavigation();
    const transferir = {
        questoesMarcadas: alternativasMarcadas,
    }

    return(
        <View>
            <View style={estilos(primeiraQuestao).containerPassadores}>       
                {!primeiraQuestao && 
                    <TouchableOpacity 
                        onPress={()=>alteraQuestao(-1,quantidadeDeQuestoesNoTeste)} 
                    >
                        <Text style={estilos(false).botoesPassadores}> Anterior </Text>
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
            {/* {ultimaQuestao &&  */}

            <TouchableOpacity 
                onPress={()=>
                    
                    Alert.alert("Está certo disso?","Deseja finalizar o simulado?",
                    [{
                        text:"Sim",
                        onPress: ()=> navigation.push('Pontuacao',transferir)
                    },
                    {
                        text:"Não",
                        onPress: ()=>{}
                    }]
                    )
                   }
            >
                <Text style={estilos(false).botaoCorrigir}> Finalizar e Corrigir Simulado </Text>
            </TouchableOpacity>
            {/* } */}
        </View> 
    )
}