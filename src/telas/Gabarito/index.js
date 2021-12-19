import React,{useState} from 'react';

import { Text } from 'react-native';
import estilos from '../../estilos';
import CabecalhoDaQuestao from '../Componentes/CabecalhoDaQuestao';
import Questao from './Componentes/Questao';
import BotoesPassadores from '../Componentes/BotoesPassadores';
import TelaPadrao from '../../componentes/TelaPadrao';

export default function Gabarito(){ 
    let questaoExibidaNaTela;
    let indexExibidaNaTela=0;
    let quantidadeDeQuestoesNoTeste = 4;
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);

    const bancoDeQuestoes = require('./questoes.json');
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
            <Questao 
                id={questaoExibidaNaTela.id}
                enunciado={questaoExibidaNaTela.enunciado}
                alternativas = {questaoExibidaNaTela.alternativas} 
                respostas={questaoExibidaNaTela.resposta.charCodeAt(0)-65}
            />
            <BotoesPassadores
                numeroQuestao= {numeroQuestao}
                alteraQuestao= {alteraQuestao}
                quantidadeDeQuestoesNoTeste = {quantidadeDeQuestoesNoTeste}
            />
        </TelaPadrao>
        );
}

