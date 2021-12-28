import React, {useState,useContext} from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import BotaoPassadorSimples from '../../componentes/BotaoPassadorSimples';
import FiltroQuestoes from '../../componentes/FiltroQuestoes';
import { DataContext } from '../../provider';
import BotaoMostraESome from '../../componentes/BotaoMostraESome';

export default function Home() {

    const {provideBDFiltrado,setProvideBDFiltrado} = useContext(DataContext);
    const [quantidadeDeQuestoesPorVez, setQuantidadeDeQuestoes] = useState(5);
    const navigation = useNavigation();
    const [mostraSome, setMostraSome] = useState(false);

    const bancoDeQuestoes = FiltroQuestoes();
    if (quantidadeDeQuestoesPorVez > bancoDeQuestoes.length) setQuantidadeDeQuestoes(bancoDeQuestoes.length);

    const criaNovaOrdenacao = (tamanhoArray,tamanhoBD)=> {
        let indexAleatorio;
        let ordemAleatoriaDosIndex= [];
        const ordemProvisoria = [];
        for(let i=0;i<tamanhoArray;i++) ordemProvisoria [i] = i;
        for(let i=0;i<tamanhoArray;i++) {
            indexAleatorio = Math.floor(Math.random() * tamanhoBD);
            ordemAleatoriaDosIndex[i] = indexAleatorio;
            // ordemProvisoria.splice(indexAleatorio,1);
        }
        return ordemAleatoriaDosIndex;
    }

    const novaOrdemDasQuestoes = criaNovaOrdenacao(quantidadeDeQuestoesPorVez,bancoDeQuestoes.length);
    const transferir = {
            quantidadeDeQuestoesNoTeste: quantidadeDeQuestoesPorVez,
            novaOrdemDasQuestoes: novaOrdemDasQuestoes
    };

    return (
        <TelaPadrao>
            <Text h1 style={estilosGerais.titulosTela}> Tela Inicial </Text>
            <View style={estilosGerais.divisor}/>
            <View style={estilos.preencher}>
                <Text>Quantidade de questões do Simulado: </Text>
            </View>
            <BotaoPassadorSimples 
                minimo={5}
                maximo={20}
                valor={quantidadeDeQuestoesPorVez}
                acao={setQuantidadeDeQuestoes}
                variacao={5}>
                {quantidadeDeQuestoesPorVez}
            </BotaoPassadorSimples>
            <View style={estilosGerais.divisor}/>
            <BotaoMostraESome
                ativador={mostraSome}
                alteraAtivador={setMostraSome}
                txtAtivo= {"Filtrar questões por assunto"}
                txtDesativo= {"Filtrar questões por assunto"} >  
                    <Text>
                        Geral
                        Ambiental
                        Legislação
                        Previdência
                        Análise de acidentes
                        Investigação de acidentes
                        Análise de riscos
                        NR1
                        NR3
                        NR4
                        NR5
                        NR6
                        NR7
                        NR9
                        NR10                        
                        NR11
                        NR12
                        NR13
                        NR15
                        NR16
                        NR17
                        NR18
                        NR20
                        NR23
                        NR26
                        NR33
                        NR35
                        Primeiros socorros
                        OIT
                    </Text>
                    {/* {<TouchableOpacity onPress={()=>{
                        nr1? carregaFiltros[4] = [...carregaFiltros[4], 2015]:
                        }}>
                        <Text style={estilos.botoesPassadores}> {nr1? "  " : " X "} </Text>
                    </TouchableOpacity>} */}
            </BotaoMostraESome>

            <View style={estilosGerais.divisor}/>

            <View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Configuracoes',quantidadeDeQuestoesPorVez)}}>
                    <Text style={estilosGerais.botoesNavegacao}>Opções de Simulado</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.push('Simulado',transferir)}>
                    <Text style={estilosGerais.botoesNavegacao}>Iniciar Simulado</Text>
                </TouchableOpacity>
            </View>
        </TelaPadrao>
    )
}