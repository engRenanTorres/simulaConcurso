import React, {useState,useContext} from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import BotaoPassadorSimples from '../../componentes/BotaoPassadorSimples';
import FiltroQuestoes from '../../componentes/FiltroQuestoes';
import { DataContext } from '../../provider';
import FiltroBanca from './Componentes/FiltroBanca';
import FiltroAssunto from './Componentes/FiltroAssunto';

export default function Home() {

    const {provideBDFiltrado,setProvideBDFiltrado} = useContext(DataContext);
    const [quantidadeDeQuestoesPorVez, setQuantidadeDeQuestoes] = useState(5);
    const navigation = useNavigation();

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
    
    // cont geraQuestoes= () =>
    const novaOrdemDasQuestoes = criaNovaOrdenacao(quantidadeDeQuestoesPorVez,bancoDeQuestoes.length);
    const transferir = {
            quantidadeDeQuestoesNoTeste: quantidadeDeQuestoesPorVez,
    };
    let questoesSimulado = [];
    novaOrdemDasQuestoes.forEach((item)=>{questoesSimulado.push(bancoDeQuestoes[item])})

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
            <Text style={{textAlign:'center'}}> Total de questões disponíveis: </Text>
            <Text style={estilos.quadroVariavel}> {bancoDeQuestoes.length} </Text>

            <View style={estilosGerais.divisor}/>
            
            <FiltroAssunto/>
            <FiltroBanca/>
 
            <View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Configuracoes',quantidadeDeQuestoesPorVez)}}>
                    <Text style={estilosGerais.botoesNavegacao}>Opções de Simulado</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                    setProvideBDFiltrado(questoesSimulado);
                    navigation.push('Simulado')}}>
                    <Text style={estilosGerais.botoesNavegacao}>Iniciar Simulado</Text>
                </TouchableOpacity>
            </View>
        </TelaPadrao>
    )
}