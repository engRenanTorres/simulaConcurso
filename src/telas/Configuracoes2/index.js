import React,{useState, useContext} from 'react';

import { Text, View, TouchableOpacity, Alert,SafeAreaView,StatusBar,FlatList } from 'react-native';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilos from './estilos';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import {DataContext} from '../../provider'
import CriaNovaOrdenacao from '../../funcoesGerais/CriaNovaOrdenacao';
import { ScrollView } from 'react-native-gesture-handler';

export default function Configuracoes2({route}) {

    let bdFilttrado = [];
    let cespe = route.params.cespe;
    let cebraspe = route.params.cebraspe;
    let fgv = route.params.fgv;

    if(!cebraspe) {
        const questoesCebraspe = require('../../dados/questoesCebraspe.json');
        bdFilttrado=[...bdFilttrado,...questoesCebraspe];
    }    
    if(!cespe) {
        const questoesCespe = require('../../dados/questoesCespe.json');
        bdFilttrado=[...bdFilttrado,...questoesCespe];
    }
    if(!fgv) {
        const questoesFgv = require('../../dados/questoes.json');
        bdFilttrado=[...bdFilttrado,...questoesFgv];
    }
    let bancoDeQuestoes = bdFilttrado;
    let qtdQuestoesTemporaria = bancoDeQuestoes.length;
    const [qtdQuestoesDisponiveis, setQtdQuestoesDisponiveis] = useState(qtdQuestoesTemporaria);
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

    const [marcarAssuntos,setMarcarAssuntos] = useState([
        {id:0, nome:"Geral",estado:false},
        {id:1, nome:"NR1",estado:false},
        {id:2, nome:"NR3",estado:false},
        {id:3, nome:"NR4",estado:false},
        {id:4, nome:"NR5",estado:false},
        {id:5, nome:"NR6",estado:false},
        {id:6, nome:"NR7",estado:false},
        {id:7, nome:"NR9",estado:false},
        {id:8, nome:"NR10",estado:false},
        {id:9, nome:"NR11",estado:false},
        {id:10, nome:"NR12",estado:false},
        {id:11, nome:"NR13",estado:false},
        {id:12, nome:"NR15",estado:false},
        {id:13, nome:"NR16",estado:false},
        {id:14, nome:"NR17",estado:false},
        {id:15, nome:"NR18",estado:false},
        {id:16, nome:"NR20",estado:false},
        {id:17, nome:"NR23",estado:false},
        {id:18, nome:"NR26",estado:false},
        {id:19, nome:"NR33",estado:false},
        {id:20, nome:"NR35",estado:false},
        {id:21, nome:"Análise de riscos",estado:false},
        {id:22, nome:"Ambiental",estado:false},
        {id:23, nome:"Legislação",estado:false},
        {id:24, nome:"Previdência",estado:false},
        {id:25, nome:"Análise de acidentes",estado:false},
        {id:26, nome:"Investigação de acidentes",estado:false},
        {id:27, nome:"Primeiros socorros",estado:false},
        {id:28, nome:"OIT",estado:false},
        
    ]);
  

    function alteraAssunto (index){
        let aTemp = marcarAssuntos;
        aTemp[index].estado = !aTemp[index].estado;
        setMarcarAssuntos([...aTemp]);
    }
    function desmarcarTudo (){
        let aTemp = marcarAssuntos;
        aTemp.forEach((item)=> item.estado = true);
        setMarcarAssuntos([...aTemp]);
    }
    function remarcarTudo (){
        let aTemp = marcarAssuntos;
        aTemp.forEach((item)=> item.estado = false);
        setMarcarAssuntos([...aTemp]);
    }
    let veSeTodasMarcadas = true;
    marcarAssuntos.forEach((assunto)=>assunto.estado&& (veSeTodasMarcadas=false));


    return (
        <FlatList
            ListHeaderComponent={() => <View>
            <Text h1 style={estilosGerais.titulosTela}> Opções de Temas </Text>
            <Text style={{textAlign:'center'}}> Total de questões disponíveis: </Text>
                <Text style={estilos(false).quadroVariavel}> {qtdQuestoesDisponiveis} </Text>
            <View style={estilos(false).opcoes}>
                <View style={estilos(false).linha}>
                    <TouchableOpacity onPress={()=>{
                            setQtdQuestoesDisponiveis(0);
                            desmarcarTudo()}}>
                            <Text style={estilos(false).botoesFiltro}> Desmarcar Todos </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                           setQtdQuestoesDisponiveis(bancoDeQuestoes.length);
                            remarcarTudo()}}>
                            <Text style={estilos(false).botoesFiltro}> Remarcar Todos </Text>
                    </TouchableOpacity>
                </View>
            </View>
                </View> }
                ListFooterComponent={() => <View>
                    <View style={estilosGerais.divisor}/>
                    <View style={estilosGerais.linhaMenu}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={estilosGerais.botoesNavegacao}> Voltar à Tela Inicial </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                        const bancoDeQuestoesOriginal = bancoDeQuestoes;
                        let bdFilttrado = [];
                        if(veSeTodasMarcadas) bdFilttrado = bancoDeQuestoesOriginal;
                        else{
                            let questoesDoAssunto = [];
                            marcarAssuntos.forEach((item)=>{
                            if(!item.estado) {
                                questoesDoAssunto = bancoDeQuestoesOriginal.filter((questao)=>questao.assunto==item.nome);
                                bdFilttrado=[...bdFilttrado,...questoesDoAssunto];
                            }})
                            
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
                    <Text style={estilosGerais.botoesPrincipais}>Iniciar Simulado</Text>
                </TouchableOpacity>
                </View>
                </View>}
                numColumns={3}
                data={marcarAssuntos}
                extraData={marcarAssuntos}
                renderItem={(item) => <TouchableOpacity onPress={()=>{
                    const qtdQuestoesDoAssunto = bancoDeQuestoes.filter((questao)=>questao.assunto==item.item.nome).length;
                    item.item.estado? qtdQuestoesTemporaria=qtdQuestoesDisponiveis+qtdQuestoesDoAssunto: qtdQuestoesTemporaria=qtdQuestoesDisponiveis-qtdQuestoesDoAssunto;
                    setQtdQuestoesDisponiveis(qtdQuestoesTemporaria);
                    alteraAssunto(item.item.id,item.item.estado)}}>
                    <Text style={estilos(item.item.estado).botoesFiltro}> {item.item.nome} </Text>
                </TouchableOpacity>}
                keyExtractor={(item) => item.id}
            />
        
    )
}