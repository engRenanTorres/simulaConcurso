import React,{useState, useContext} from 'react';

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilos from './estilos';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import {DataContext} from '../../provider'
import CriaNovaOrdenacao from '../../funcoesGerais/CriaNovaOrdenacao';

export default function Configuracoes2({route}) {

    let bancoDeQuestoes = route.params.bancoDeQuestoes;
    const quantidadeDeQuestoesPorVez = route.params.quantidadeDeQuestoesPorVez;

    const [geral,setGeral] = useState(false);
    const [ambiental,setAmbiental] = useState(false);
    const [legislacao,setLegislacao] = useState(false);
    const [previdencia,setPrevidencia] = useState(false);
    const [analiseDeAcidentes,setAnaliseDeAcidentes] = useState(false);    
    const [investigacaoDeAcidentes,setinvestigacaoDeAcidentes] = useState(false);
    const [analiseDeRiscos,setanaliseDeRiscos] = useState(false);
    const [nR1,setNR1] = useState(false);
    const [nR3,setNR3] = useState(false);
    const [nR4,setNR4] = useState(false);
    const [nR5,setNR5] = useState(false);
    const [nR6,setNR6] = useState(false);
    const [nR7,setNR7] = useState(false);
    const [nR9,setNR9] = useState(false);
    const [nR10,setNR10] = useState(false);
    const [nR11,setNR11] = useState(false);
    const [nR12,setNR12] = useState(false);
    const [nR13,setNR13] = useState(false);
    const [nR15,setNR15] = useState(false);
    const [nR16,setNR16] = useState(false);
    const [nR17,setNR17] = useState(false);
    const [nR18,setNR18] = useState(false);
    const [nR20,setNR20] = useState(false);
    const [nR23,setNR23] = useState(false);
    const [nR26,setNR26] = useState(false);
    const [nR33,setNR33] = useState(false);
    const [nR35,setNR35] = useState(false);
    const [primeirosSocorros,setPrimeirosSocorros] = useState(false);
    const [oIT,setOIT] = useState(false);

    const todasMarcadas = (geral&&ambiental&&legislacao&&previdencia&&analiseDeAcidentes&&investigacaoDeAcidentes&&analiseDeRiscos);
    const todasMarcadas2 = (nR1&&nR3&&nR4&&nR5&&nR6&&nR7&&nR9&&nR10&&nR11&&nR12&nR13&&nR15&&nR16&&nR17&nR18);
    const todasMarcadas3 = (nR20&&nR23 &&nR26 &&nR33 &&nR35 &&primeirosSocorros&&oIT);

    const {setProvideBDFiltrado} = useContext(DataContext);

    const navigation = useNavigation();

    return (
        <TelaPadrao>
            <Text h1 style={estilosGerais.titulosTela}> Escolha os Temas </Text>
            <View style={estilos(false).opcoes}>
                <TouchableOpacity onPress={()=>{setGeral(!geral);}}>
                    <Text style={estilos(geral).botoesFiltro}> Geral </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setAmbiental(!ambiental)}}>
                    <Text style={estilos(ambiental).botoesFiltro}> Ambiental </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setLegislacao(!legislacao)}}>
                    <Text style={estilos(legislacao).botoesFiltro}> Legislação </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setPrevidencia(!previdencia)}}>
                    <Text style={estilos(previdencia).botoesFiltro}> Previdência </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setAnaliseDeAcidentes(!analiseDeAcidentes)}}>
                    <Text style={estilos(analiseDeAcidentes).botoesFiltro}> Análise de acidentes </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setinvestigacaoDeAcidentes(!investigacaoDeAcidentes)}}>
                    <Text style={estilos(investigacaoDeAcidentes).botoesFiltro}> Investigação de acidentes </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setanaliseDeRiscos(!analiseDeRiscos)}}>
                    <Text style={estilos(analiseDeRiscos).botoesFiltro}> Análise de riscos </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR1(!nR1)}}>
                    <Text style={estilos(nR1).botoesFiltro}> NR1 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR3(!nR3)}}>
                    <Text style={estilos(nR3).botoesFiltro}> NR3 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR4(!nR4)}}>
                    <Text style={estilos(nR4).botoesFiltro}> NR4 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR5(!nR5)}}>
                    <Text style={estilos(nR5).botoesFiltro}> NR5 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR6(!nR6)}}>
                    <Text style={estilos(nR6).botoesFiltro}> NR6 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR7(!nR7)}}>
                    <Text style={estilos(nR7).botoesFiltro}> NR7 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR9(!nR9)}}>
                    <Text style={estilos(nR9).botoesFiltro}> NR9 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR10(!nR10)}}>
                    <Text style={estilos(nR10).botoesFiltro}> NR10 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR11(!nR11)}}>
                    <Text style={estilos(nR11).botoesFiltro}> NR11 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR12(!nR12)}}>
                    <Text style={estilos(nR12).botoesFiltro}> NR12 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR13(!nR13)}}>
                    <Text style={estilos(nR13).botoesFiltro}> NR13 </Text>
                </TouchableOpacity>            
                <TouchableOpacity onPress={()=>{setNR15(!nR15)}}>
                    <Text style={estilos(nR15).botoesFiltro}> NR15 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR16(!nR16)}}>
                    <Text style={estilos(nR16).botoesFiltro}> NR16 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR17(!nR17)}}>
                    <Text style={estilos(nR17).botoesFiltro}> NR17 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR18(!nR18)}}>
                    <Text style={estilos(nR18).botoesFiltro}> NR18 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR20(!nR20)}}>
                    <Text style={estilos(nR20).botoesFiltro}> NR20 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR23(!nR23)}}>
                    <Text style={estilos(nR23).botoesFiltro}> NR23 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR26(!nR26)}}>
                    <Text style={estilos(nR26).botoesFiltro}> NR26 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR33(!nR33)}}>
                    <Text style={estilos(nR33).botoesFiltro}> NR33 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNR35(!nR35)}}>
                    <Text style={estilos(nR35).botoesFiltro}> NR35 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setPrimeirosSocorros(!primeirosSocorros)}}>
                    <Text style={estilos(primeirosSocorros).botoesFiltro}> Primeiros Socorros </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setOIT(!oIT)}}>
                    <Text style={estilos(oIT).botoesFiltro}> O.I.T. </Text>
                </TouchableOpacity>
            </View>
            <View style={estilosGerais.divisor}/>
            <View>
                <TouchableOpacity onPress={()=> {
                        const bancoDeQuestoesOriginal = bancoDeQuestoes;
                        let bdFilttrado = [];
                        if(todasMarcadas&&todasMarcadas2&&todasMarcadas3) bdFilttrado = bancoDeQuestoesOriginal;
                        else{
                            let questoesDoAssunto = [];
                            if(!geral) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="Geral");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }    
                            if(!ambiental) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="Ambiental");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!legislacao) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="Legislação");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!previdencia) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="Previdência");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!analiseDeAcidentes) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="Análise de acidentes");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!investigacaoDeAcidentes) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="Investigação de acidentes");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!analiseDeRiscos) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="Análise de riscos");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR1) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR1");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR3) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR3");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR4) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR4");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR5) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR5");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR6) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR6");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR7) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR7");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR9) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR9");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR10) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR10");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR11) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR11");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR12) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR12");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR13) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR13");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR15) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR15");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR16) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR16");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR17) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR17");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR18) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR18");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR20) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR20");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR23) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR23");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR26) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR26");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR33) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR33");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!nR35) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="NR35");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!primeirosSocorros) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="Primeiros socorros");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            if(!oIT) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto=="OIT");
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }
                            
                        }
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