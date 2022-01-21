import React,{useState, useContext} from 'react';

import { Text, View, TouchableOpacity, Alert,SafeAreaView,StatusBar,FlatList } from 'react-native';
import estilos from './estilos';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import {DataContext} from '../../provider'
import CriaNovaOrdenacao from '../../funcoesGerais/CriaNovaOrdenacao';

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
        {id:16, nome:"NR19",estado:false},
        {id:17, nome:"NR20",estado:false},
        {id:18, nome:"NR23",estado:false},
        {id:19, nome:"NR26",estado:false},
        {id:20, nome:"NR32",estado:false},
        {id:21, nome:"NR33",estado:false},
        {id:22, nome:"NR35",estado:false},
        {id:23, nome:"Análise de riscos",estado:false},
        {id:24, nome:"Ambiental",estado:false},
        {id:25, nome:"Legislação",estado:false},
        {id:26, nome:"Previdência",estado:false},
        {id:27, nome:"Primeiros socorros",estado:false},
        {id:28, nome:"Psicologia",estado:false},
        {id:29, nome:"OIT",estado:false},
        
    ]);

  
/*     let bancoCespe = bdFilttrado;
    bancoCespe.forEach((questao)=>{
        marcarAssuntos.forEach((assunto)=>{
            if(questao.assunto==assunto.nome) questao.normal=1;
        })
    })
    bancoCespe.forEach((questao)=>{
        if(questao.normal==undefined) console.log(questao.id);
    })  */
  

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
        <SafeAreaView>
            <StatusBar/>
            
            <FlatList
                ListHeaderComponent={() => 
                <View>
                    <Text h1 style={estilosGerais.titulosTela}> Opções de Temas </Text>
                    <Text style={{textAlign:'center'}}> Total de questões disponíveis: </Text>
                    <Text style={estilos(false).quadroVariavel}> {qtdQuestoesDisponiveis} </Text>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity 
                            onPress={()=>                 
                                Alert.alert("Abreviações","NR 01 - Disposições Gerais\n\nNR 02 - Inspeção Prévia(Revogada)\n\nNR 03 - Embargo ou Interdição\n\nNR 04 - Serviços Especializados em Eng. de Segurança e em Medicina do Trabalho\n\nNR 05 - Comissão Interna de Prevenção de Acidentes\n\nNR 06 - Equipamentos de Proteção Individual - EPI\n\nNR 07 - Programas de Controle Médico de Saúde Ocupacional\n\nNR 08 - Edificações\n\nNR 09 - Programas de Prevenção de Riscos Ambientais\n\nNR 10 - Segurança em Instalações e Serviços em Eletricidade\n\nNR 11 - Transporte, Movimentação, Armazenagem e Manuseio de Materiais\n\nNR 12 - Máquinas e Equipamentos\n\nNR 13 - Caldeiras, Vasos de Pressão e Tabulações e Tanques Metálicos de Armazenamento\n\nNR 14 - Fornos\n\nNR 15 - Atividades e Operações Insalubres\n\nNR 16 - Atividades e Operações Perigosas\n\nNR 17 - Ergonomia\n\nNR 18 - Condições e Meio Ambiente de Trabalho na Indústria da Construção\n\nNR 19 - Explosivos\n\nNR 20 - Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis\n\nNR 21 - Trabalhos a Céu Aberto\n\nNR 22 - Segurança e Saúde Ocupacional na Mineração\n\nNR 23 - Proteção Contra Incêndios\n\nNR 24 - Condições Sanitárias e de Conforto nos Locais de Trabalho\n\nNR 25 - Resíduos Industriais\n\nNR 26 - Sinalização de Segurança\n\nNR 27 - Registro Profissional do Técnico de Segurança do Trabalho no MTB (Revogada pela Portaria GM n.º 262/2008)\n\nNR 28 - Fiscalização e Penalidades\n\nNR 29 - Segurança e Saúde no Trabalho Portuário\n\nNR 30 - Segurança e Saúde no Trabalho Aquaviário\n\nNR 31 - Segurança e Saúde no Trabalho na Agricultura, Pecuária Silvicultura, Exploração Florestal e Aquicultura\n\nNR 32 - Segurança e Saúde no Trabalho em Estabelecimentos de Saúde\n\nNR 33 - Segurança e Saúde no Trabalho em Espaços Confinados\n\nNR 34 - Condições e Meio Ambiente de Trabalho na Indústria da Construção, Reparação e Desmonte Naval\n\nNR 35 - Trabalho em Altura\n\nNR 36 - Segurança e Saúde no Trabalho em Empresas de Abate e Processamento de Carnes e Derivados\n\nNR 37 - Segurança e Saúde em Plataformas de Petróleo\n\nOIT - Organização Internacional do Trabalho",
                                )
                            }
                        >
                            <Text style={estilos(false).botoesFiltro}> Verificar Abreviações </Text>
                        </TouchableOpacity>
                    </View>
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
                    renderItem={(item) =><View style={{flex:1,justifyContent:'center',alignItems:'center'}}><TouchableOpacity onPress={()=>{
                        const qtdQuestoesDoAssunto = bancoDeQuestoes.filter((questao)=>questao.assunto==item.item.nome).length;
                        item.item.estado? qtdQuestoesTemporaria=qtdQuestoesDisponiveis+qtdQuestoesDoAssunto: qtdQuestoesTemporaria=qtdQuestoesDisponiveis-qtdQuestoesDoAssunto;
                        setQtdQuestoesDisponiveis(qtdQuestoesTemporaria);
                        alteraAssunto(item.item.id,item.item.estado)}}>
                        <Text style={estilos(item.item.estado).botoesFiltro}> {item.item.nome} </Text>
                    </TouchableOpacity>
                    </View> }
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        
    )
}