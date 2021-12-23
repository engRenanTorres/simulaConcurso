import React,{useState} from 'react';

import { Text } from 'react-native';
import estilos from '../../estilos';
import CabecalhoDaQuestao from '../Componentes/CabecalhoDaQuestao';
import BotoesPassadores from './Componentes/BotoesPassadores';
import TelaPadrao from '../../componentes/TelaPadrao';
import QuestaoResolvida from './Componentes/QuestaoResolvida';

export default function Gabarito({route}){ 
    let indexExibidaNaTela=0;
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);
    const alternativaMarcada = route.params.questoesMarcadas;
    const novaOrdemDasQuestoes = route.params.novaOrdemDasQuestoes;
    let quantidadeDeQuestoesNoTeste = novaOrdemDasQuestoes.length;
    
    const bancoDeQuestoes = require('../../dados/questoes.json');
    if (quantidadeDeQuestoesNoTeste > bancoDeQuestoes.length) quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length;
    
    const alteraQuestao = (valor,totalDeQuestoes) => {
        const proximaQuestao = numeroQuestao+valor;
        if(proximaQuestao<0||proximaQuestao==totalDeQuestoes)return;
        setnumeroQuestao(proximaQuestao)};
    

    let questaoExibidaNaTela = bancoDeQuestoes[novaOrdemDasQuestoes[numeroQuestao]];

    return (
        <TelaPadrao>
            <Text style={estilos.titulo}>Correção das Questões</Text>
            <CabecalhoDaQuestao 
                indiceQuestao={numeroQuestao} 
                acao={alteraQuestao}
                totalDeQuestoes={quantidadeDeQuestoesNoTeste}
                {...questaoExibidaNaTela}   
            />
            <QuestaoResolvida
                {...questaoExibidaNaTela}
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

