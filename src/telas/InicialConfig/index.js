import React, {useState} from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import CampoInteiro from '../../componentes/CampoInteiro';

export default function Configuracao() {

    const [quantidadeDeQuestoesPorVez, setQuantidadeDeQuestoes] = useState(3);

    return (
    <View>
        <Text> Menu de Configuracao do Simulado</Text>
        <Text>Escolha o número de questões do Simulado: </Text>
        <CampoInteiro
            valor={quantidadeDeQuestoesPorVez}
            acao={setQuantidadeDeQuestoes}
        />
        <Text>Colocar ordem aleatória?</Text>
        <Text>Escolha os temas das questoes</Text>


        <TouchableOpacity onPress={()=>{}}>
            <Text>Iniciar Simulado</Text>
        </TouchableOpacity>
    </View>
    )
}