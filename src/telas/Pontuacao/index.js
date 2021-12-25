import React from 'react';

import { Text, TouchableOpacity, View} from 'react-native';
import estilos from '../../estilosGerais';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosPont from './estilosPont';
import { useNavigation } from '@react-navigation/native';

export default function Pontuacao({route}){ 
 
    const transferir = {
        questoesMarcadas: route.params.questoesMarcadas,
        novaOrdemDasQuestoes: route.params.novaOrdemDasQuestoes
    }
    
    const alternativaMarcada = route.params.questoesMarcadas;
    const novaOrdemDasQuestoes = route.params.novaOrdemDasQuestoes;
    
    const navigation = useNavigation();
    let quantidadeDeQuestoesNoTeste = novaOrdemDasQuestoes.length;
    
    const bancoDeQuestoes = require('../../dados/questoes.json');
    if (quantidadeDeQuestoesNoTeste > bancoDeQuestoes.length) quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length; 
    let gabaritoDasQuestoes = [];
    novaOrdemDasQuestoes.forEach((item)=>gabaritoDasQuestoes.push(bancoDeQuestoes[item].resposta));

    const quantCertas = (alternativaMarcada, gabaritoDasQuestoes) => {
        let contagemAcertos = 0;
        // function removeUndefined(value) {
        //     return value != undefined;
        //   }
        // let marcadasReduzidas = alternativaMarcada.filter(removeUndefined);
        alternativaMarcada.forEach((item, index)=> {
            if(item == gabaritoDasQuestoes[index].charCodeAt(0)-65) contagemAcertos++;
        })
        return contagemAcertos;
    };
    const quantErradas = (alternativaMarcada, gabaritoDasQuestoes) => {
        let contagemAcertos = 0;
        alternativaMarcada.forEach((item, index)=> {
            if(item != gabaritoDasQuestoes[index].charCodeAt(0)-65) contagemAcertos++;
        })
        return contagemAcertos;
    };

    const certas = quantCertas (alternativaMarcada,gabaritoDasQuestoes);
    const erradas = quantErradas (alternativaMarcada,gabaritoDasQuestoes);
    const percentual = (certas/quantidadeDeQuestoesNoTeste*100).toPrecision(4);
    const percentualTexto = `${percentual}%`

    return (
        <TelaPadrao>
            <Text h1 style={estilos.titulosTela}>Quadro Geral</Text>
        <Text style={estilosPont.saudacao}>{percentual>65?"Parabéns!":"Continue desenvolvendo!"}</Text>
            <Text h2 style={estilosPont.corpoTextoGeral}>
                Você acertou {certas} de um total de {quantidadeDeQuestoesNoTeste} questões
            </Text>
            <View style={estilosPont.divisor}/>
            <View style={estilosPont.estatisticas}>
                <Text> Acertos :</Text> 
                <Text style={estilosPont.resultados} > {certas} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Erros :</Text> 
                <Text style={estilosPont.resultados} > {erradas} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Nulas :</Text> 
                <Text style={estilosPont.resultados} > {quantidadeDeQuestoesNoTeste-(certas+erradas)} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Saldo :</Text> 
                <Text style={estilosPont.resultados} > {certas-erradas} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Percentual :</Text> 
                <Text style={estilosPont.resultados} > {percentualTexto} </Text>
            </View>

            <TouchableOpacity
                onPress={()=>navigation.push('Corrigir',transferir)}
                >
                <Text style={estilosPont.botoesAtivador}> Visualizar Questões</Text>
            </TouchableOpacity>

        </TelaPadrao>
        );
}

