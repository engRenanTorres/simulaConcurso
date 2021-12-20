import React,{useState} from 'react';

import { FlatList, Text } from 'react-native';
import estilos from '../../estilos';
import CabecalhoDaQuestao from '../Componentes/CabecalhoDaQuestao';
import BotoesPassadores from '../Componentes/BotoesPassadores';
import TelaPadrao from '../../componentes/TelaPadrao';
import QuestaoResolvida from './Componentes/QuestaoResolvida';

export default function Gabarito({route}){ 
    let questaoExibidaNaTela;
    let indexExibidaNaTela=0;
    let quantidadeDeQuestoesNoTeste = 4;
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);
    const alternativaMarcada = route.params.questoesMarcadas;
    
    const bancoDeQuestoes = require('../questoes.json');
    if (quantidadeDeQuestoesNoTeste > bancoDeQuestoes.length) quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length;
    
    
    const novaOrdemDasQuestoes = [0,1,2,3,4];
     
    const alteraQuestao = (valor,totalDeQuestoes) => {
        const proximaQuestao = numeroQuestao+valor;
        if(proximaQuestao<0||proximaQuestao==totalDeQuestoes)return;
        setnumeroQuestao(proximaQuestao)};
    

    questaoExibidaNaTela = bancoDeQuestoes[novaOrdemDasQuestoes[numeroQuestao]];
    return (
        <TelaPadrao>
            <Text style={estilos.titulo}>Correção das Questões</Text>
            <CabecalhoDaQuestao 
                indiceQuestao={numeroQuestao} 
                acao={alteraQuestao}
                totalDeQuestoes={quantidadeDeQuestoesNoTeste} />
            <QuestaoResolvida 
                id={questaoExibidaNaTela.id}
                enunciado={questaoExibidaNaTela.enunciado}
                alternativas = {questaoExibidaNaTela.alternativas} 
                respostas={questaoExibidaNaTela.resposta.charCodeAt(0)-65}
                alternativasMarcadas = {alternativaMarcada}
            />
            <BotoesPassadores
                numeroQuestao= {numeroQuestao}
                alteraQuestao= {alteraQuestao}
                quantidadeDeQuestoesNoTeste = {quantidadeDeQuestoesNoTeste}
            />
        </TelaPadrao>
        );
}

