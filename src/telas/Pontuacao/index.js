import React from 'react';

import { Text, View} from 'react-native';
import estilos from '../../estilosGerais';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosPont from './estilosPont';

export default function Pontuacao(){ 
 
    const alternativaMarcada = [0,3,4];
    const novaOrdemDasQuestoes = [0,4,5];
    let quantidadeDeQuestoesNoTeste = novaOrdemDasQuestoes.length;
    
    const bancoDeQuestoes = require('../../dados/questoes.json');
    if (quantidadeDeQuestoesNoTeste > bancoDeQuestoes.length) quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length; 
    let gabaritoDasQuestoes = [];
    bancoDeQuestoes.forEach((questao,index)=>
    (novaOrdemDasQuestoes.some((num)=>num == index)) ? gabaritoDasQuestoes.push(questao.resposta):"");

    const quantCertas = (alternativaMarcada, gabaritoDasQuestoes) => {
        let contagemAcertos = 0;
        alternativaMarcada.forEach((item, index)=> {if(item == gabaritoDasQuestoes[index].charCodeAt(0)-65) contagemAcertos++;})
        return contagemAcertos;
    };

    const certas = quantCertas (alternativaMarcada,gabaritoDasQuestoes);
    const erradas = quantidadeDeQuestoesNoTeste - certas;
    const percentual = `${(certas/quantidadeDeQuestoesNoTeste*100).toPrecision(4)}%`

    return (
        <TelaPadrao>
            <Text h1 style={estilos.titulosTela}>Quadro Geral</Text>
            <Text style={estilosPont.saudacao}>Parabéns!</Text>
            <Text h2 style={estilosPont.corpoTextoGeral}>
                Você acertou {certas} de um total de {quantidadeDeQuestoesNoTeste} questões
            </Text>
            <View style={estilosPont.divisor}/>
            <View style={estilosPont.estatisticas}>
                <Text> Acertos : </Text> 
                <Text style={estilosPont.botoesAtivador} > {certas} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Erros : </Text> 
                <Text style={estilosPont.botoesAtivador} > {erradas} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Saldo : </Text> 
                <Text style={estilosPont.botoesAtivador} > {certas-erradas} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Percentual : </Text> 
                <Text style={estilosPont.botoesAtivador} > {percentual} </Text>
            </View>
            

        </TelaPadrao>
        );
}

