import React,{useState, useContext} from 'react';

import { Text, View, TouchableOpacity, Alert,SafeAreaView,StatusBar,FlatList } from 'react-native';
import estilos from './estilos';
import estilosGerais from '../../estilosGerais';
import { useNavigation } from '@react-navigation/native';
import {DataContext} from '../../provider'
import CriaNovaOrdenacao from '../../funcoesGerais/CriaNovaOrdenacao';
import { AntDesign } from '@expo/vector-icons';
import BotoesNavegadores from '../../componentes/BotoesNavegadores';

export default function Configuracoes2({route}) {
    
    function Left(str, n){
        if (n <= 0)
            return "";
        else if (n > String(str).length)
            return str;
        else
            return String(str).substring(0,n);
    }

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

    let temas = [];
    let i=0;
    bdFilttrado.forEach((questao)=>{
        if(temas.indexOf(questao.assunto)==-1) {
            temas[i]=questao.assunto;
            i++;
        }
    });
    const temasGerais= temas.filter((assunto)=>Left(assunto,2)!='NR');
    const temasNR= temas.filter((assunto)=>Left(assunto,2)=='NR'&&assunto.length==3);
    const temasNR1= temas.filter((assunto)=>Left(assunto,3)=='NR1'&&assunto.length==4);
    const temasNR2= temas.filter((assunto)=>Left(assunto,3)=='NR2'&&assunto.length==4);
    const temasNR3= temas.filter((assunto)=>Left(assunto,3)=='NR3'&&assunto.length==4);
    const temasNaOrdem =[...temasNR.sort(),...temasNR1.sort(),...temasNR2.sort(),...temasNR3.sort(),...temasGerais.sort()];
  

    let AssuntosProntos = [];
    temasNaOrdem.forEach((assunto,index)=>
        {
            AssuntosProntos[index]={
                id: index,
                nome: assunto,
                estado: false,
            }
        }
    );
    const [marcarAssuntos,setMarcarAssuntos] = useState(AssuntosProntos);
  

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
                    <Text h1 style={estilosGerais.titulosTela}> Op????es de Temas </Text>
                    <Text style={{textAlign:'center'}}> Total de quest??es dispon??veis: </Text>
                    <Text style={estilos(false).quadroVariavel}> {qtdQuestoesDisponiveis} </Text>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity 
                            onPress={()=>                 
                                Alert.alert("Abrevia????es","NR 01 - Disposi????es Gerais\n\nNR 02 - Inspe????o Pr??via(Revogada)\n\nNR 03 - Embargo ou Interdi????o\n\nNR 04 - Servi??os Especializados em Eng. de Seguran??a e em Medicina do Trabalho\n\nNR 05 - Comiss??o Interna de Preven????o de Acidentes\n\nNR 06 - Equipamentos de Prote????o Individual - EPI\n\nNR 07 - Programas de Controle M??dico de Sa??de Ocupacional\n\nNR 08 - Edifica????es\n\nNR 09 - Programas de Preven????o de Riscos Ambientais\n\nNR 10 - Seguran??a em Instala????es e Servi??os em Eletricidade\n\nNR 11 - Transporte, Movimenta????o, Armazenagem e Manuseio de Materiais\n\nNR 12 - M??quinas e Equipamentos\n\nNR 13 - Caldeiras, Vasos de Press??o e Tabula????es e Tanques Met??licos de Armazenamento\n\nNR 14 - Fornos\n\nNR 15 - Atividades e Opera????es Insalubres\n\nNR 16 - Atividades e Opera????es Perigosas\n\nNR 17 - Ergonomia\n\nNR 18 - Condi????es e Meio Ambiente de Trabalho na Ind??stria da Constru????o\n\nNR 19 - Explosivos\n\nNR 20 - Seguran??a e Sa??de no Trabalho com Inflam??veis e Combust??veis\n\nNR 21 - Trabalhos a C??u Aberto\n\nNR 22 - Seguran??a e Sa??de Ocupacional na Minera????o\n\nNR 23 - Prote????o Contra Inc??ndios\n\nNR 24 - Condi????es Sanit??rias e de Conforto nos Locais de Trabalho\n\nNR 25 - Res??duos Industriais\n\nNR 26 - Sinaliza????o de Seguran??a\n\nNR 27 - Registro Profissional do T??cnico de Seguran??a do Trabalho no MTB (Revogada pela Portaria GM n.?? 262/2008)\n\nNR 28 - Fiscaliza????o e Penalidades\n\nNR 29 - Seguran??a e Sa??de no Trabalho Portu??rio\n\nNR 30 - Seguran??a e Sa??de no Trabalho Aquavi??rio\n\nNR 31 - Seguran??a e Sa??de no Trabalho na Agricultura, Pecu??ria Silvicultura, Explora????o Florestal e Aquicultura\n\nNR 32 - Seguran??a e Sa??de no Trabalho em Estabelecimentos de Sa??de\n\nNR 33 - Seguran??a e Sa??de no Trabalho em Espa??os Confinados\n\nNR 34 - Condi????es e Meio Ambiente de Trabalho na Ind??stria da Constru????o, Repara????o e Desmonte Naval\n\nNR 35 - Trabalho em Altura\n\nNR 36 - Seguran??a e Sa??de no Trabalho em Empresas de Abate e Processamento de Carnes e Derivados\n\nNR 37 - Seguran??a e Sa??de em Plataformas de Petr??leo\n\nOIT - Organiza????o Internacional do Trabalho",
                                )
                            }
                        >
                            <Text style={estilos(false).botoesFiltro}> Verificar Abrevia????es </Text>
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

                    <BotoesNavegadores 
                        navigateDirection={'Home'}
                        art={"home"}> 
                        Tela inicial 
                    </BotoesNavegadores>

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
                                {Alert.alert("Quest??es insuficientes","Reveja os filtros aplicados.")}
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