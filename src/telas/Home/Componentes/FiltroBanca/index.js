import React, {useState} from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import BotaoMostraESome from '../../../../componentes/BotaoMostraESome';
import estilos from './estilos';

export default function FiltroBanca({bancoDeQuestoes,acao}) {

    const [mostraSome,setMostraSome] = useState(false);
    const [fgv,setFgv] = useState(false);
    const [cespe,setCespe] = useState(false);
    const [cebraspe,setCebraspe] = useState(false);
    let permiteDesmarcar = true;


    return (
        <BotaoMostraESome
        ativador={mostraSome}
        alteraAtivador={setMostraSome}
        txtAtivo= {"Filtrar questões por Banca"}
        txtDesativo= {"Filtrar questões por Banca"} >  
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
            <View style={estilos(false).farei}>
                <TouchableOpacity onPress={()=>{
                    const bancoDeQuestoesOriginal = bancoDeQuestoes;
                    let bdFilttrado = [];
                    if(!cebraspe&&!cespe&&!fgv) bdFilttrado = bancoDeQuestoesOriginal;
                    else{
                        const questoesFgv = bancoDeQuestoesOriginal.filter((questao)=>questao.banca=="FGV");
                        const questoesCespe = bancoDeQuestoesOriginal.filter((questao)=>questao.banca=="CESPE");
                        if(!cebraspe) {}
                        if(!cespe) bdFilttrado=[...bdFilttrado,...questoesCespe];
                        if(!fgv) bdFilttrado=[...bdFilttrado,...questoesFgv];
                        acao(bdFilttrado);
                    }
                    setMostraSome(false);
                }}>
                    <Text style={estilos(false).botoesAplicar}> Aplicar Filtro </Text>
                </TouchableOpacity>
            </View>
        </View>
    </BotaoMostraESome>
    )
}