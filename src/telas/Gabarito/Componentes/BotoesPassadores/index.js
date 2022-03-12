import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { useNavigation } from '@react-navigation/native';
import estilosGerais from '../../../../estilosGerais';
import { AntDesign } from '@expo/vector-icons';
import BotoesNavegadores from '../../../../componentes/BotoesNavegadores';

export default function BotoesPassadores ({numeroQuestao,alteraQuestao,quantidadeDeQuestoesNoTeste}) {
    const primeiraQuestao = numeroQuestao == 0? true:false;
    const navigation = useNavigation();

    return(
        <View style={{paddingBottom: 15}}>
            <View style={estilos(primeiraQuestao).containerPassadores}>       
            {!primeiraQuestao && 
                <TouchableOpacity 
                    onPress={()=>alteraQuestao(-1,quantidadeDeQuestoesNoTeste)} 
                >
                    <Text style={estilos(false).botoesPassadores}> Anterior <AntDesign name="arrowleft" size={14} color="white" /></Text>
                </TouchableOpacity>
            }
            {numeroQuestao<(quantidadeDeQuestoesNoTeste-1) && 
                <TouchableOpacity 
                    onPress={()=>alteraQuestao(+1,quantidadeDeQuestoesNoTeste)}
                >
                <Text style={estilos(false).botoesPassadores}><AntDesign name="arrowright" size={14} color="white" /> Próxima </Text>
                </TouchableOpacity>
            }
            </View> 
            <View style={estilosGerais.linhaMenu}>
                <BotoesNavegadores
                    functionType={navigation.goBack}
                    art={"bars"}>
                        Pontuação
                </BotoesNavegadores>
                <BotoesNavegadores 
                    navigateDirection={'Home'}
                    art={"home"}> 
                        Tela inicial 
                </BotoesNavegadores>
            </View>
        </View>
    )
}