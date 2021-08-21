import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function BotoesPassadores ({numeroQuestao,alteraQuestao,quantidadeDeQuestoesNoTeste}) {

    return(
        <View style={{flexDirection: 'row'}}>       
            {numeroQuestao>0 && <TouchableOpacity onPress={()=>alteraQuestao(-1,quantidadeDeQuestoesNoTeste)}>
                <Text> Anterior </Text>
            </TouchableOpacity>}
            {numeroQuestao<(quantidadeDeQuestoesNoTeste-1) && <TouchableOpacity onPress={()=>alteraQuestao(+1,quantidadeDeQuestoesNoTeste)}>
                <Text> Próxima </Text>
            </TouchableOpacity>}
        </View> 
    )
}