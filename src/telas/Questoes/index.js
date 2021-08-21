import React,{useState} from 'react';

import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estilos from '../../estilos';
import CabecalhoDaQuestao from './CabecalhoDaQuestao';
import Questao from './Questao';

export default function Questoes(){ 
    let questaoExibidaNaTela;
    let indexExibidaNaTela=0;
    let quantidadeDeQuestoesNoTeste = 3;
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);
    // const listaDeResposta = [];
    // for(let i=0;i<quantidadeDeQuestoesNoTeste;i++) listaDeResposta[i]=5;
    
    

    let questions = [
    {
        id: 1,
        enunciado: 'Quem é o maior eng do brasil?',
        alternativas:[
            'Renan',
            'Diego',
            'Peçanha',
            'Noira',
        ],
        answer: 1
    },
    {
        id: 2,
        enunciado: 'Quem é o mais bonito do brasil?',
        alternativas:[
            'Renan',
            'Diego',
            'Peçanha',
            'Noira',
        ],
        answer: 1
    },
    {
        id: 3,
        enunciado: 'Quem é o mais feio do brasil?',
        alternativas:[
            'Renan',
            'Diego',
            'Peçanha',
            'Noira',
        ],
        answer: 4
    },
    ]
    if (quantidadeDeQuestoesNoTeste > questions.length) quantidadeDeQuestoesNoTeste = questions.length;
    
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
    

    questaoExibidaNaTela = questions[novaOrdemDasQuestoes[numeroQuestao]];
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
            />
            <View style={{flexDirection: 'row'}}>
                {numeroQuestao>0 && <TouchableOpacity onPress={()=>alteraQuestao(-1,quantidadeDeQuestoesNoTeste)}>
                    <Text> Anterior </Text>
                </TouchableOpacity>}
                {numeroQuestao<(quantidadeDeQuestoesNoTeste-1) && <TouchableOpacity onPress={()=>alteraQuestao(+1,quantidadeDeQuestoesNoTeste)}>
                    <Text> Próxima </Text>
                </TouchableOpacity>}
            </View> 
        </>
        );
}

