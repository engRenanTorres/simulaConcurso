import React,{useState, useContext} from 'react';

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilos from './estilos';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import {DataContext} from '../../provider'
import CriaNovaOrdenacao from '../../funcoesGerais/CriaNovaOrdenacao';

export default function Configuracoes1({route}) {

    const questoesFgv = require('../../dados/questoes.json');
    const questoesCespe = require('../../dados/questoesCespe.json');
    const questoesCebraspe = require('../../dados/questoesCebraspe.json');
    let bancoDeQuestoes = [];
    const quantidadeDeQuestoesPorVez = route.params.quantidadeDeQuestoesPorVez;

    const [fgv,setFgv] = useState(false);
    const [cespe,setCespe] = useState(false);
    const [cebraspe,setCebraspe] = useState(false);
    const {setProvideBDFiltrado} = useContext(DataContext);
    let permiteDesmarcar = true;

    const navigation = useNavigation();

    return (
        <TelaPadrao>
            <Text h1 style={estilosGerais.titulosTela}> Opções de Simulado </Text>
            <View style={estilos(false).opcoes}>
            <TouchableOpacity onPress={()=>{
                    !cebraspe&&cespe&&fgv? permiteDesmarcar=cebraspe: permiteDesmarcar =!cebraspe;
                    setCebraspe(permiteDesmarcar);
                }}>
                <Text style={estilos(cebraspe).botoesFiltro}> CEBRASPE </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                    (cebraspe&&!cespe&&fgv)? permiteDesmarcar =cespe: permiteDesmarcar =!cespe;
                    setCespe(permiteDesmarcar)
                }}>
                <Text style={estilos(cespe).botoesFiltro}> CESPE </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                    (cebraspe&&cespe&&!fgv)? permiteDesmarcar =fgv: permiteDesmarcar =!fgv;
                    setFgv(permiteDesmarcar)
                }}>
                <Text style={estilos(fgv).botoesFiltro}> FGV </Text>
            </TouchableOpacity>
            </View>

            <View style={estilosGerais.divisor}/>
            <View>
                <TouchableOpacity onPress={()=> {
                        let bdFilttrado = [];
                        if(!cebraspe) bdFilttrado=[...bdFilttrado,...questoesCebraspe];    
                        if(!cespe) bdFilttrado=[...bdFilttrado,...questoesCespe];
                        if(!fgv) bdFilttrado=[...bdFilttrado,...questoesFgv];
                        bancoDeQuestoes= bdFilttrado;
                        navigation.push('Configuracoes2',{quantidadeDeQuestoesPorVez,bancoDeQuestoes});
                    }}>
                    <Text style={estilosGerais.botoesNavegacao}>Filtrar Temas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                        let bdFilttrado = [];
                        if(!cebraspe) bdFilttrado=[...bdFilttrado,...questoesCebraspe];    
                        if(!cespe) bdFilttrado=[...bdFilttrado,...questoesCespe];
                        if(!fgv) bdFilttrado=[...bdFilttrado,...questoesFgv];
                        bancoDeQuestoes= bdFilttrado;
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
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                >
                <Text style={estilosGerais.botoesNavegacao}> Voltar à Tela Inicial </Text>
                </TouchableOpacity>
            </View>
        </TelaPadrao>
    )
}