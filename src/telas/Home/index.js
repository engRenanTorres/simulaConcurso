import React, {useState,useContext} from 'react';

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import estilos from './estilos';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import BotaoPassadorSimples from '../../componentes/BotaoPassadorSimples';
import { DataContext } from '../../provider';
import CriaNovaOrdenacao from '../../funcoesGerais/CriaNovaOrdenacao';

export default function Home() {

    const {setProvideBDFiltrado} = useContext(DataContext);
    const [quantidadeDeQuestoesPorVez, setQuantidadeDeQuestoes] = useState(5);
    
    const navigation = useNavigation();

    const questoesFgv = require('../../dados/questoes.json');
    const questoesCespe = require('../../dados/questoesCespe.json');
    const questoesCebraspe = require('../../dados/questoesCebraspe.json');
    let bancoDeQuestoes = [...questoesFgv,...questoesCespe,...questoesCebraspe];

    return (
        <TelaPadrao >
            <View>
                <Text h1 style={estilosGerais.titulosTela}> Tela Inicial </Text>
                <View style={estilosGerais.divisor}/>
                <View style={estilos.preencher}>
                    <Text> Quantidade de questões do Simulado: </Text>
                </View>
                <BotaoPassadorSimples 
                    minimo={5}
                    maximo={20}
                    valor={quantidadeDeQuestoesPorVez}
                    acao={setQuantidadeDeQuestoes}
                    variacao={5}>
                    {quantidadeDeQuestoesPorVez}
                </BotaoPassadorSimples>
                <Text style={{textAlign:'center'}}> Total de questões disponíveis: </Text>
                <Text style={estilos.quadroVariavel}> {bancoDeQuestoes.length} </Text>
            </View>

            <View style={estilosGerais.divisor}/>
           
            <View style={{marginTop:'25%'}}>
                <TouchableOpacity onPress={()=>{navigation.push('Configuracoes1',{quantidadeDeQuestoesPorVez})}}>
                    <Text style={estilosGerais.botoesNavegacao}>Filtrar Questões</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                        if(bancoDeQuestoes.length<quantidadeDeQuestoesPorVez) {
                            {Alert.alert("Questões insuficientes","Reveja os filtros aplicados.")}
                        }
                        else{
                            const novaOrdemDasQuestoes = CriaNovaOrdenacao(quantidadeDeQuestoesPorVez,bancoDeQuestoes.length);
                            let questoesSimulado = [];
                            novaOrdemDasQuestoes.forEach((item)=>{questoesSimulado.push(bancoDeQuestoes[item])});
                            setProvideBDFiltrado(questoesSimulado);
                            navigation.push('Simulado');
                        }
                    }}>
                    <Text style={estilosGerais.botoesNavegacao}>Iniciar Simulado</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('SobreOApp')}>
                    <Text style={estilosGerais.botoesNavegacao}>Sobre o App</Text>
                </TouchableOpacity>
            </View>
        </TelaPadrao>
    )
}