import React,{useState,useContext} from 'react';

import { Text } from 'react-native';
import CabecalhoDaQuestao from '../Componentes/CabecalhoDaQuestao';
import BotoesPassadores from './Componentes/BotoesPassadores';
import TelaPadrao from '../../componentes/TelaPadrao';
import QuestaoResolvida from './Componentes/QuestaoResolvida';
import estilosGerais from '../../estilosGerais';
import { DataContext } from '../../provider';

export default function Gabarito({route}){ 
    let indexExibidaNaTela=0;
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);
    const alternativaMarcada = route.params.questoesMarcadas;
    
    
    const {provideBDFiltrado} = useContext(DataContext);
    const bancoDeQuestoes = provideBDFiltrado;
    let quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length;
    if (quantidadeDeQuestoesNoTeste > bancoDeQuestoes.length) quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length;
    
    const alteraQuestao = (valor,totalDeQuestoes) => {
        const proximaQuestao = numeroQuestao+valor;
        if(proximaQuestao<0||proximaQuestao==totalDeQuestoes)return;
        setnumeroQuestao(proximaQuestao)};
    
    let questaoExibidaNaTela = bancoDeQuestoes[numeroQuestao];

    return (
        <TelaPadrao>
            <Text h1 style={estilosGerais.titulosTela}>Correção das Questões</Text>
            <CabecalhoDaQuestao 
                indiceQuestao={numeroQuestao} 
                acao={alteraQuestao}
                totalDeQuestoes={quantidadeDeQuestoesNoTeste}
                {...questaoExibidaNaTela}   
            />
            <QuestaoResolvida
                {...questaoExibidaNaTela}
                numeroQuestao = {numeroQuestao}
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

