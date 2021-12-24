import React from 'react';
import { View, Text } from 'react-native';
import estiloPadrao from './estilos';

export default function AlternativasVerificadas ({alternativaMarcada, id2, alternativas,resposta}){
    return  <>
        { alternativas.map((alternativa,index) => 
            <View 
            key = {index}
            style={ alternativaMarcada[id2]==index? 
            (resposta==index? estiloPadrao(2).alternativaMarcada: estiloPadrao(1).alternativaMarcada) : 
            (resposta==index? estiloPadrao(3).alternativaMarcada: estiloPadrao(0).alternativaMarcada)}>
                <Text style={ alternativaMarcada[id2]==index? estiloPadrao(1).textoMarcado : 
                    (resposta==index? estiloPadrao(1).textoMarcado : estiloPadrao(0).textoMarcado) }>
                    {alternativa}  
                </Text>
            </View>
        )}
    </>
}