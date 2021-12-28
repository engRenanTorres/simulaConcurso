import React, {useContext, useState} from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import FiltroQuestoes from '../../componentes/FiltroQuestoes';
import {DataContext} from '../../provider';
import estilos from './estilos';
import BotaoMostraESome from '../../componentes/BotaoMostraESome';

export default function Configuracoes({route}) {

    const [nr1,setNr1] = useState(true);
    const quantidadeDeQuestoesPorVez = route.params.quantidadeDeQuestoesPorVez;
    const [mostraSome, setMostraSome] = useState(false);
    const {provideBDFiltrado,setProvideBDFiltrado} = useContext(DataContext);

    // let carregaFiltros = provideFiltro;
    // carregaFiltros[4] = [2015];
    // setProvideFiltro(carregaFiltros);
    const navigation = useNavigation();

    const bancoDeQuestoes = FiltroQuestoes();
    if (route.params.quantidadeDeQuestoesPorVez > bancoDeQuestoes.length) setQuantidadeDeQuestoes(bancoDeQuestoes.length);
    

    return (
        <TelaPadrao>
            <Text h1 style={estilosGerais.titulosTela}> Opções de Simulado </Text>
            <View>
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
                

                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                >
                <Text style={estilosGerais.botoesNavegacao}> Voltar à Tela Inicial </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={()=>{
                    const novaOrdemDasQuestoes = criaNovaOrdenacao(quantidadeDeQuestoesPorVez,bancoDeQuestoes.length);
                    const transferir = {
                        quantidadeDeQuestoesNoTeste: quantidadeDeQuestoesPorVez,
                        novaOrdemDasQuestoes: novaOrdemDasQuestoes
                    };
                    navigation.push('Simulado',transferir)}}>
                    <Text style={estilosGerais.botoesNavegacao}>Iniciar Simulado</Text>
                </TouchableOpacity> */}
            </View>
        </TelaPadrao>
    )
}