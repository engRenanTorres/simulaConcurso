import React,{useState,useContext} from 'react';

import { Text } from 'react-native';
import CabecalhoDaQuestao from '../Componentes/CabecalhoDaQuestao';
import Questao from './Componentes/Questao';
import BotoesPassadores from './Componentes/BotoesPassadores';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';
import { DataContext } from '../../provider';
import { ScrollView } from 'react-native-gesture-handler';

export default function Simulado(){ 
    let indexExibidaNaTela=0;

    const {provideBDFiltrado} = useContext(DataContext);
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);

    let marcacaoInicial = []
    for(let i=0; i<provideBDFiltrado.length;i++) {marcacaoInicial.push(undefined)};
    const [alternativasMarcadas,setAlternativaMarcada] = useState(marcacaoInicial);

    // const bancoDeQuestoes = require('../../dados/questoes.json');
    const bancoDeQuestoes = provideBDFiltrado;
     
    const alteraQuestao = (valor,totalDeQuestoes) => {
        const proximaQuestao = numeroQuestao+valor;
        if(proximaQuestao<0||proximaQuestao==totalDeQuestoes)return;
        setnumeroQuestao(proximaQuestao)};
    

    let questaoExibidaNaTela = bancoDeQuestoes[numeroQuestao];
    return (
        <TelaPadrao>
            <Text h1 style={estilosGerais.titulosTela}>Lista de Questões</Text>
            <ScrollView>
                <CabecalhoDaQuestao 
                    indiceQuestao={numeroQuestao} 
                    acao={alteraQuestao}
                    totalDeQuestoes={provideBDFiltrado.length} 
                    {...questaoExibidaNaTela}   
                />
                <Questao 
                    {...questaoExibidaNaTela}
                    numeroQuestao = {numeroQuestao}
                    alternativasMarcadas = {alternativasMarcadas}
                    acaoDeMarcar = {setAlternativaMarcada}
                />
            </ScrollView>
            <BotoesPassadores
                numeroQuestao= {numeroQuestao}
                alteraQuestao= {alteraQuestao}
                quantidadeDeQuestoesNoTeste = {provideBDFiltrado.length}
                alternativasMarcadas = {alternativasMarcadas}
            />
        </TelaPadrao>
        );
}

