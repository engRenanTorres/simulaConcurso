import React,{useState} from 'react';

import { Text } from 'react-native';
import estilos from '../../estilos';
import CabecalhoDaQuestao from './CabecalhoDaQuestao';
import Questao from './Questao';
import BotoesPassadores from '../../componentes/BotoesPassadores';

export default function Questoes(){ 
    let questaoExibidaNaTela;
    let indexExibidaNaTela=0;
    let quantidadeDeQuestoesNoTeste = 3;
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);

    const bancoDeQuestoes = require('./questoes.json');
    if (quantidadeDeQuestoesNoTeste > bancoDeQuestoes.length) quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length;
    
    // let listaDeResposta = [];
    // for (let i =0; i<3;i++) listaDeResposta[i]=5;
    //     console.log(`console 1 lista é ${listaDeResposta}`);
    // const setListaDeResposta = (valor,index) => {
    //     listaDeResposta[(index-1)]=valor;
    //     console.log(`valor é ${valor} e index é ${index}`)
    //     console.log(`console 2 lista é ${listaDeResposta}`);
    // }
    
    const criaNovaOrdenacao = (tamanhoArray)=> {
        let indexAleatorio;
        let ordemAleatoriaDosIndex= [];
        const ordemProvisoria = [];
        for(let i=0;i<tamanhoArray;i++) ordemProvisoria [i] = i;
        for(let i=0;i<tamanhoArray;i++) {
            indexAleatorio = Math.floor(Math.random() * ordemProvisoria.length);
            ordemAleatoriaDosIndex[i] = ordemProvisoria[indexAleatorio];
            ordemProvisoria.splice(indexAleatorio,1);
        }
        return ordemAleatoriaDosIndex;
    }
    const novaOrdemDasQuestoes = criaNovaOrdenacao(quantidadeDeQuestoesNoTeste);

     
    const alteraQuestao = (valor,totalDeQuestoes) => {
        const proximaQuestao = numeroQuestao+valor;
        if(proximaQuestao<0||proximaQuestao==totalDeQuestoes)return;
        setnumeroQuestao(proximaQuestao)};
    

    questaoExibidaNaTela = bancoDeQuestoes[novaOrdemDasQuestoes[numeroQuestao]];
    return (
        <>
            <Text style={estilos.titulo}>Lista de Questões</Text>
            <CabecalhoDaQuestao 
                indiceQuestao={numeroQuestao} 
                acao={alteraQuestao}
                totalDeQuestoes={quantidadeDeQuestoesNoTeste} />
            <Questao 
                id={questaoExibidaNaTela.id}
                enunciado={questaoExibidaNaTela.enunciado}
                alternativas = {questaoExibidaNaTela.alternativas} 
                answer={questaoExibidaNaTela.answer}
                // atualizaRespostas={setListaDeResposta}
            />
            <BotoesPassadores
                numeroQuestao= {numeroQuestao}
                alteraQuestao= {alteraQuestao}
                quantidadeDeQuestoesNoTeste = {quantidadeDeQuestoesNoTeste}
            />
        </>
        );
}

