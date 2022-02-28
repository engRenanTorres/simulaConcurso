import React,{useState, useContext} from 'react';

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilos from './estilos';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import {DataContext} from '../../provider'
import CriaNovaOrdenacao from '../../funcoesGerais/CriaNovaOrdenacao';
import { AntDesign } from '@expo/vector-icons';

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
    let qtdQuestoesTemporaria = (questoesCebraspe.length+questoesCespe.length+questoesFgv.length);
    const [qtdQuestoesDisponiveis, setQtdQuestoesDisponiveis] = useState(qtdQuestoesTemporaria);

    const navigation = useNavigation();
    const testaTodasDesmarcadas = (cebraspe,cespe,fgv)=>{
        return !(cebraspe&&cespe&&fgv);
    }

    return (
        <TelaPadrao>
            <View>
                <Text h1 style={estilosGerais.titulosTela}> Opções de Bancas </Text>
                <Text style={{textAlign:'center'}}> Total de questões disponíveis: </Text>
                <Text style={estilos(false).quadroVariavel}> {qtdQuestoesDisponiveis} </Text>
                <View style={estilos(false).opcoes}>
                <TouchableOpacity onPress={()=>{
                        if(testaTodasDesmarcadas(!cebraspe,cespe,fgv)) {
                            cebraspe? qtdQuestoesTemporaria=qtdQuestoesDisponiveis+questoesCebraspe.length: qtdQuestoesTemporaria=qtdQuestoesDisponiveis-questoesCebraspe.length;
                            setQtdQuestoesDisponiveis(qtdQuestoesTemporaria);
                            setCebraspe(!cebraspe);
                        }
                    }}>
                    <Text style={estilos(cebraspe).botoesFiltro}> CEBRASPE </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                        if(testaTodasDesmarcadas(cebraspe,!cespe,fgv)) {
                            cespe? qtdQuestoesTemporaria=qtdQuestoesDisponiveis+questoesCespe.length: qtdQuestoesTemporaria=qtdQuestoesDisponiveis-questoesCespe.length;
                            setQtdQuestoesDisponiveis(qtdQuestoesTemporaria);
                            setCespe(!cespe);
                        }
                    }}>
                    <Text style={estilos(cespe).botoesFiltro}> CESPE </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                        if(testaTodasDesmarcadas(cebraspe,cespe,!fgv)) {
                            fgv? qtdQuestoesTemporaria=qtdQuestoesDisponiveis+questoesFgv.length: qtdQuestoesTemporaria=qtdQuestoesDisponiveis-questoesFgv.length;
                            setQtdQuestoesDisponiveis(qtdQuestoesTemporaria);
                            setFgv(!fgv);
                        }
                    }}>
                    <Text style={estilos(fgv).botoesFiltro}> FGV </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={estilosGerais.divisor}/>
            <View style={{marginTop:'25%'}}/>
            <View style= {estilosGerais.painelNavegacao}>
                <View style={estilosGerais.linhaMenu}>
                    <TouchableOpacity onPress={()=> {
                            navigation.push('Configuracoes2',{quantidadeDeQuestoesPorVez,cebraspe,cespe,fgv});
                        }}>
                        <Text style={estilosGerais.botoesNavegacao}><AntDesign name="filter" size={14} color="white" /> Filtrar Temas</Text>
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
                        <Text style={estilosGerais.botoesPrincipais}><AntDesign name="play" size={14} color="white" /> Iniciar Simulado</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            >
                        <Text style={estilosGerais.botoesNavegacao}><AntDesign name="home" size={14} color="white" /> Tela Inicial </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TelaPadrao>
    )
}