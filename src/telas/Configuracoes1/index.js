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
    const questoesRenan = require('../../dados/questoesRenan.json');
    let bancoDeQuestoes = [];
    const quantidadeDeQuestoesPorVez = route.params.quantidadeDeQuestoesPorVez;

    const [fgv,setFgv] = useState(false);
    const [cespe,setCespe] = useState(false);
    const [cebraspe,setCebraspe] = useState(false);
    const [renan,setRenan] = useState(false);
    const {setProvideBDFiltrado} = useContext(DataContext);
    let qtdQuestoesTemporaria = (questoesCebraspe.length+questoesCespe.length+questoesFgv.length+questoesRenan.length);
    const [qtdQuestoesDisponiveis, setQtdQuestoesDisponiveis] = useState(qtdQuestoesTemporaria);

    const navigation = useNavigation();
    const testaTodasDesmarcadas = (cebraspe,cespe,fgv,renan)=>{
        return !(cebraspe&&cespe&&fgv&&renan);
    }

    return (
        <TelaPadrao>
            <View>
                <Text h1 style={estilosGerais.titulosTela}> Opções de Bancas </Text>
                <Text style={{textAlign:'center'}}> Total de questões disponíveis: </Text>
                <Text style={estilos(false).quadroVariavel}> {qtdQuestoesDisponiveis} </Text>
                <View style={estilos(false).opcoes}>
                <TouchableOpacity onPress={()=>{
                        if(testaTodasDesmarcadas(!cebraspe,cespe,fgv,renan)) {
                            cebraspe? qtdQuestoesTemporaria=qtdQuestoesDisponiveis+questoesCebraspe.length: qtdQuestoesTemporaria=qtdQuestoesDisponiveis-questoesCebraspe.length;
                            setQtdQuestoesDisponiveis(qtdQuestoesTemporaria);
                            setCebraspe(!cebraspe);
                        }
                    }}>
                    <Text style={estilos(cebraspe).botoesFiltro}> CEBRASPE </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                        if(testaTodasDesmarcadas(cebraspe,!cespe,fgv,renan)) {
                            cespe? qtdQuestoesTemporaria=qtdQuestoesDisponiveis+questoesCespe.length: qtdQuestoesTemporaria=qtdQuestoesDisponiveis-questoesCespe.length;
                            setQtdQuestoesDisponiveis(qtdQuestoesTemporaria);
                            setCespe(!cespe);
                        }
                    }}>
                    <Text style={estilos(cespe).botoesFiltro}> CESPE </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                        if(testaTodasDesmarcadas(cebraspe,cespe,!fgv,renan)) {
                            fgv? qtdQuestoesTemporaria=qtdQuestoesDisponiveis+questoesFgv.length: qtdQuestoesTemporaria=qtdQuestoesDisponiveis-questoesFgv.length;
                            setQtdQuestoesDisponiveis(qtdQuestoesTemporaria);
                            setFgv(!fgv);
                        }
                    }}>
                    <Text style={estilos(fgv).botoesFiltro}> FGV </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                        if(testaTodasDesmarcadas(cebraspe,cespe,fgv,!renan)) {
                            renan? qtdQuestoesTemporaria=qtdQuestoesDisponiveis+questoesRenan.length: qtdQuestoesTemporaria=qtdQuestoesDisponiveis-questoesRenan.length;
                            setQtdQuestoesDisponiveis(qtdQuestoesTemporaria);
                            setRenan(!renan);
                        }
                    }}>
                    <Text style={estilos(renan).botoesFiltro}> NR34 e NR37 </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={estilosGerais.divisor}/>
            <View style={{marginTop:'25%'}}/>
            <View style={estilosGerais.linhaMenu}>
                <TouchableOpacity onPress={()=> {
                        navigation.push('Configuracoes2',{quantidadeDeQuestoesPorVez,cebraspe,cespe,fgv,renan});
                    }}>
                    <Text style={estilosGerais.botoesNavegacao}>Filtrar Temas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                        let bdFilttrado = [];
                        if(!cebraspe) bdFilttrado=[...bdFilttrado,...questoesCebraspe];    
                        if(!cespe) bdFilttrado=[...bdFilttrado,...questoesCespe];
                        if(!fgv) bdFilttrado=[...bdFilttrado,...questoesFgv];
                        if(!renan) bdFilttrado=[...bdFilttrado,...questoesRenan];
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
                    <Text style={estilosGerais.botoesPrincipais}>Iniciar Simulado</Text>
                </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        >
                        <Text style={estilosGerais.botoesNavegacao}> Voltar à Tela Inicial </Text>
                    </TouchableOpacity>
                </View>
        </TelaPadrao>
    )
}