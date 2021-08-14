import React from 'react';

import { Text,FlatList } from 'react-native';
import estilos from '../../estilos';
import Questao from './Questao';

export default function Questoes(){ 
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
    ];
    
    return (
        <>
            <Text style={estilos.titulo}>Lista de Questões</Text>
            <FlatList 
                data={questions}
                renderItem={({item})=><Questao {...item}/>}
                keyExtractor={({id})=> String(id)}
            />
            
            
        </>
        );
}

