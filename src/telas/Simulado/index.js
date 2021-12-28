import React,{useState} from 'react';

import { Text } from 'react-native';
import CabecalhoDaQuestao from '../Componentes/CabecalhoDaQuestao';
import Questao from './Componentes/Questao';
import BotoesPassadores from './Componentes/BotoesPassadores';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';
import FiltroQuestoes from '../../componentes/FiltroQuestoes';

export default function Simulado({route}){ 
    let indexExibidaNaTela=0;
    let quantidadeDeQuestoesNoTeste = route.params.quantidadeDeQuestoesNoTeste;
    const novaOrdemDasQuestoes = route.params.novaOrdemDasQuestoes;
 
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);
    const [alternativasMarcadas,setAlternativaMarcada] = useState([]);

    // const bancoDeQuestoes = require('../../dados/questoes.json');
    const bancoDeQuestoes = FiltroQuestoes();
     
    const alteraQuestao = (valor,totalDeQuestoes) => {
        const proximaQuestao = numeroQuestao+valor;
        if(proximaQuestao<0||proximaQuestao==totalDeQuestoes)return;
        setnumeroQuestao(proximaQuestao)};
    

    let questaoExibidaNaTela = bancoDeQuestoes[novaOrdemDasQuestoes[numeroQuestao]];
    return (
        <TelaPadrao>
            <Text h1 style={estilosGerais.titulosTela}>Lista de Questões</Text>
            <CabecalhoDaQuestao 
                indiceQuestao={numeroQuestao} 
                acao={alteraQuestao}
                totalDeQuestoes={quantidadeDeQuestoesNoTeste} 
                {...questaoExibidaNaTela}   
            />
            <Questao 
                {...questaoExibidaNaTela}
                numeroQuestao = {numeroQuestao}
                alternativasMarcadas = {alternativasMarcadas}
                acaoDeMarcar = {setAlternativaMarcada}
            />
            <BotoesPassadores
                numeroQuestao= {numeroQuestao}
                alteraQuestao= {alteraQuestao}
                quantidadeDeQuestoesNoTeste = {quantidadeDeQuestoesNoTeste}
                alternativasMarcadas = {alternativasMarcadas}
                novaOrdemDasQuestoes = {novaOrdemDasQuestoes}
            />
        </TelaPadrao>
        );
}

