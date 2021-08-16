import React,{useState} from 'react';

import { Text,FlatList } from 'react-native';
import estilos from '../../estilos';
import CabecalhoDaQuestao from './CabecalhoDaQuestao';
import Questao from './Questao';

export default function Questoes(){ 
    let questaoExibidaNaTela;
    let indexExibidaNaTela=0;
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);
    

    let questions = [
        {
            id: 1,
            enunciado: 'Quem é o maior eng do brasil?',
            opcao1:'Renan',
            opcao2: 'Diego',
            opcao3: 'Peçanha',
            opcao4: 'Noira',
            answer: 1
        },
        {
            id: 2,
            enunciado: 'Quem é o mais bonito do brasil?',
            opcao1:'Renan',
            opcao2: 'Diego',
            opcao3: 'Peçanha',
            opcao4: 'Noira',
            answer: 1
        },
        {
            id: 3,
            enunciado: 'Quem é o mais feio do brasil?',
            opcao1:'Renan',
            opcao2: 'Diego',
            opcao3: 'Peçanha',
            opcao4: 'Noira',
            answer: 4
        },
    ]
    
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
    const novaOrdemDasQuestoes = criaNovaOrdenacao(questions.length);

     
    const alteraQuestao = (valor,totalDeQuestoes) => {
        const proximaQuestao = numeroQuestao+valor;
        if(proximaQuestao<0||proximaQuestao==totalDeQuestoes)return;
        setnumeroQuestao(proximaQuestao)};
    

    questaoExibidaNaTela = questions[novaOrdemDasQuestoes[numeroQuestao]];
    return (
        <>
            <Text style={estilos.titulo}>Lista de Questões</Text>
            <CabecalhoDaQuestao 
                indiceQuestao={(numeroQuestao)} 
                acao={alteraQuestao}
                totalDeQuestoes={questions.length} />
            <Questao {...questaoExibidaNaTela}/>
            {/* <FlatList 
                data={questions}
                renderItem={({item})=><Questao {...item}/>}
                keyExtractor={({id})=> String(id)}
            /> */}
            
            
            
        </>
        );
}

