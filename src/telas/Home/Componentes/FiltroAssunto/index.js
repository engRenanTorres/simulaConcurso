import React from 'react';

import { Text, View } from 'react-native';
import BotaoMostraESome from '../../../../componentes/BotaoMostraESome';
import estilos from './estilos';
import estilosGerais from '../../../../estilosGerais';
import { useState } from 'react/cjs/react.development';

export default function FiltroAssunto({}) {

    const [mostraSome,setMostraSome] = useState(false);
    
    return (
        <BotaoMostraESome
                ativador={mostraSome}
                alteraAtivador={setMostraSome}
                txtAtivo= {"Filtrar questões por assunto"}
                txtDesativo= {"Filtrar questões por assunto"} >  
                    <Text>
                        Geral
                        Ambiental
                        Legislação
                        Previdência
                        Análise de acidentes
                        Investigação de acidentes
                        Análise de riscos
                        NR1
                        NR3
                        NR4
                        NR5
                        NR6
                        NR7
                        NR9
                        NR10                        
                        NR11
                        NR12
                        NR13
                        NR15
                        NR16
                        NR17
                        NR18
                        NR20
                        NR23
                        NR26
                        NR33
                        NR35
                        Primeiros socorros
                        OIT
                    </Text>
                    {/* {<TouchableOpacity onPress={()=>{
                        nr1? carregaFiltros[4] = [...carregaFiltros[4], 2015]:
                        }}>
                        <Text style={estilos.botoesPassadores}> {nr1? "  " : " X "} </Text>
                    </TouchableOpacity>} */}
            </BotaoMostraESome>
    )
}