import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import estilos from './estilos';
import { AntDesign } from '@expo/vector-icons';

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
                        <Text style={estilos(false).botoesPassadores}>Anterior <AntDesign name="arrowleft" size={14} color="white" /></Text>
                    </TouchableOpacity>
                }

                {!ultimaQuestao && 
                    <TouchableOpacity 
                        onPress={()=>alteraQuestao(+1,quantidadeDeQuestoesNoTeste)}
                    >
                    <Text style={estilos(false).botoesPassadores}><AntDesign name="arrowright" size={14} color="white" /> Próxima </Text>
                    </TouchableOpacity>
                }
            </View>

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
                <Text style={estilos(false).botaoCorrigir}><AntDesign name="checksquare" size={14} color="white" /> Finalizar e Corrigir Simulado </Text>
            </TouchableOpacity>
        </View> 
    )
}