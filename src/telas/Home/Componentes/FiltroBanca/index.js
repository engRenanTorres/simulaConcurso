import React, {useState} from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import BotaoMostraESome from '../../../../componentes/BotaoMostraESome';
import estilos from './estilos';
import estilosGerais from '../../../../estilosGerais';

export default function FiltroBanca({}) {

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
                    (!cebraspe&&cespe&&fgv)? permiteDesmarcar =cebraspe: permiteDesmarcar =!cebraspe;
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
    </BotaoMostraESome>
    )
}