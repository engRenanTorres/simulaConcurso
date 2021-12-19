import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import estiloPadrao from './estilos';

export default function Alternativas({alternativaMarcada, acao, id2, alternativas,resposta}){
    
    return  <>
       
        { alternativas.map((alternativa,index) => 
            <View 
            key = {index}
            style={ resposta==index? estiloPadrao(false).alternativaMarcada : estiloPadrao(true).alternativaMarcada}>
                <Text style={ resposta==index? estiloPadrao(false).textoMarcado : estiloPadrao(true).textoMarcado }>{alternativa}</Text>
            </View>
        )}
    </>
}