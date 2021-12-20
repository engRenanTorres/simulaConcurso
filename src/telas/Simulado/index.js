import React,{useState} from 'react';

import { Text } from 'react-native';
import estilos from '../../estilos';
import CabecalhoDaQuestao from './Componentes/CabecalhoDaQuestao';
import Questao from './Componentes/Questao';
import BotoesPassadores from './Componentes/BotoesPassadores';
import TelaPadrao from '../../componentes/TelaPadrao';

export default function Simulado(){ 
    let questaoExibidaNaTela;
    let indexExibidaNaTela=0;
    let quantidadeDeQuestoesNoTeste = 4;
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);
    const [alternativasMarcadas,setAlternativaMarcada] = useState([5,5,5,5]);

    const bancoDeQuestoes = require('../questoes.json');
    if (quantidadeDeQuestoesNoTeste > bancoDeQuestoes.length) quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length;
    
    
    // const criaNovaOrdenacao = (tamanhoArray)=> {
    //     let indexAleatorio;
    //     let ordemAleatoriaDosIndex= [];
    //     const ordemProvisoria = [];
    //     for(let i=0;i<tamanhoArray;i++) ordemProvisoria [i] = i;
    //     for(let i=0;i<tamanhoArray;i++) {
    //         indexAleatorio = Math.floor(Math.random() * ordemProvisoria.length);
    //         ordemAleatoriaDosIndex[i] = ordemProvisoria[indexAleatorio];
    //         ordemProvisoria.splice(indexAleatorio,1);
    //     }
    //     return ordemAleatoriaDosIndex;
    // }
    // const novaOrdemDasQuestoes = criaNovaOrdenacao(quantidadeDeQuestoesNoTeste);
    const novaOrdemDasQuestoes = [0,1,2,3,4];


     
    const alteraQuestao = (valor,totalDeQuestoes) => {
        const proximaQuestao = numeroQuestao+valor;
        if(proximaQuestao<0||proximaQuestao==totalDeQuestoes)return;
        setnumeroQuestao(proximaQuestao)};
    

    questaoExibidaNaTela = bancoDeQuestoes[novaOrdemDasQuestoes[numeroQuestao]];
    return (
        <TelaPadrao>
            <Text style={estilos.titulo}>Lista de Questões</Text>
            <CabecalhoDaQuestao 
                indiceQuestao={numeroQuestao} 
                acao={alteraQuestao}
                totalDeQuestoes={quantidadeDeQuestoesNoTeste} />
            <Questao 
                id={questaoExibidaNaTela.id}
                enunciado={questaoExibidaNaTela.enunciado}
                alternativas = {questaoExibidaNaTela.alternativas}
                alternativasMarcadas = {alternativasMarcadas}
                acaoDeMarcar = {setAlternativaMarcada}
            />
            <BotoesPassadores
                numeroQuestao= {numeroQuestao}
                alteraQuestao= {alteraQuestao}
                quantidadeDeQuestoesNoTeste = {quantidadeDeQuestoesNoTeste}
                alternativasMarcadas = {alternativasMarcadas}
            />
        </TelaPadrao>
        );
}

