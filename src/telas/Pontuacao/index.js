import React, {useContext} from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import estilos from '../../estilosGerais';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosPont from './estilosPont';
import { useNavigation } from '@react-navigation/native';
import estilosGerais from '../../estilosGerais';
import { DataContext } from '../../provider';
import { AntDesign } from '@expo/vector-icons';



export default function Pontuacao({route}){ 
 
    const transferir = {
        questoesMarcadas: route.params.questoesMarcadas,
    }

    const {provideBDFiltrado} = useContext(DataContext);
    const alternativaMarcada = route.params.questoesMarcadas;
    
    const navigation = useNavigation();
    
    const bancoDeQuestoes = provideBDFiltrado;
    const quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length;
    let gabaritoDasQuestoes = [];
    bancoDeQuestoes.forEach((item)=> gabaritoDasQuestoes.push(item.resposta));

    const quantCertas = (alternativaMarcada, gabaritoDasQuestoes) => {
        let contagemAcertos = 0;
         alternativaMarcada.forEach((item, index)=> {
            if(item == gabaritoDasQuestoes[index].charCodeAt(0)-65) {
                contagemAcertos++;
            }
        })

        return contagemAcertos;
    };
    const quantNulas = (alternativaMarcada) => {
        let contagemNulas = 0;
        alternativaMarcada.forEach((item)=> {
            if(item==undefined) {contagemNulas++;}
        })
    
        return contagemNulas;
    };

    const certas = quantCertas (alternativaMarcada,gabaritoDasQuestoes);
    const nulas = quantNulas(alternativaMarcada);
    const erradas = quantidadeDeQuestoesNoTeste-(certas+nulas);
    const percentual = (certas/quantidadeDeQuestoesNoTeste*100).toPrecision(4);
    const percentualTexto = `${percentual}%`

    return (
        <TelaPadrao>
            <Text h1 style={estilos.titulosTela}>Quadro Geral</Text>
        <Text style={estilosPont.saudacao}>{percentual>65?"Parabéns!":"Continue desenvolvendo!"}</Text>
            <Text h2 style={estilosPont.corpoTextoGeral}>
                Você acertou {certas} de um total de {quantidadeDeQuestoesNoTeste} questões
            </Text>
            <View style={estilosPont.divisor}/>
            <View style={estilosPont.estatisticas}>
                <Text> Acertos :</Text> 
                <Text style={estilosPont.resultados} > {certas} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Erros :</Text> 
                <Text style={estilosPont.resultados} > {erradas} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Nulas :</Text> 
                <Text style={estilosPont.resultados} > {nulas} </Text>
            </View>
            <View style={estilosPont.divisor}/>
            <View style={estilosPont.estatisticas}>
                <Text> Saldo :</Text> 
                <Text style={estilosPont.resultados} > {certas-erradas} </Text>
            </View>
            <View style={estilosPont.estatisticas}>
                <Text> Percentual :</Text> 
                <Text style={estilosPont.resultados} > {percentualTexto} </Text>
            </View>

            <View style={estilosGerais.linhaMenu}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    >
                    <Text style={estilosGerais.botoesNavegacao}><AntDesign name="back" size={14} color="white" /> Tela Inicial </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>navigation.push('Corrigir',transferir)}
                    >
                    <Text style={estilosGerais.botoesPrincipais}><AntDesign name="bars" size={14} color="white" /> Ver Questões</Text>
                </TouchableOpacity>
            </View>


        </TelaPadrao>
        );
}

