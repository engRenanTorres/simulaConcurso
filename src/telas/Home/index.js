import React, {useState,useContext} from 'react';

import { Text, View, TouchableOpacity, Alert, Linking } from 'react-native';
import estilos from './estilos';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import BotaoPassadorSimples from '../../componentes/BotaoPassadorSimples';
import { DataContext } from '../../provider';
import CriaNovaOrdenacao from '../../funcoesGerais/CriaNovaOrdenacao';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {

    const {setProvideBDFiltrado} = useContext(DataContext);
    const [quantidadeDeQuestoesPorVez, setQuantidadeDeQuestoes] = useState(5);
    
    const navigation = useNavigation();

    const questoesFgv = require('../../dados/questoes.json');
    const questoesCespe = require('../../dados/questoesCespe.json');
    const questoesCebraspe = require('../../dados/questoesCebraspe.json');
    let bancoDeQuestoes = [...questoesFgv,...questoesCespe,...questoesCebraspe];

/* teste de ids repetidos  
   let arrayIds = [];
    bancoDeQuestoes.forEach((questao,index)=>arrayIds[index]=questao.id);
    const verificaIdRepetido = arrayIds.filter(function(ele , pos){
        return arrayIds.indexOf(ele) != pos;
    })
    console.log(`aqui ${verificaIdRepetido}`);
 */
    return (
        <TelaPadrao >
            <View>
                <Text h1 style={estilosGerais.titulosTela}> Tela Inicial </Text>
                <View style={estilosGerais.divisor}/>
                <Text style={{textAlign:'center'}}> Quantidade de questões do Simulado: </Text>
               
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
            <View style={estilosGerais.painelNavegacao}>
                <View style={estilosGerais.linhaMenu}>
                    <TouchableOpacity onPress={()=>{navigation.push('Configuracoes1',{quantidadeDeQuestoesPorVez})}}>
                        <Text style={estilosGerais.botoesNavegacao}><AntDesign name="filter" size={14} color="white" /> Filtrar Questões</Text>
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
                        <Text style={estilosGerais.botoesPrincipais}><AntDesign name="play" size={14} color="white" /> Iniciar Simulado</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('SobreOApp')}>
                        <Text style={estilosGerais.botoesNavegacao}><AntDesign name="eye" size={14} color="white" /> Sobre o App</Text>
                    </TouchableOpacity>
                    <Text style={estilosGerais.botoesNavegacao}
                        onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.engrenantorres.sesmc')}>
                        <AntDesign name="star" size={14} color="white" /> Avalie o App
                </Text>
                </View>
            </View>

        </TelaPadrao>
    )
}