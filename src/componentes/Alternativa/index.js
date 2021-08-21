import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import estiloPadrao from './estilos';

export default function Alternativa({checado, valor, acao}){
    const retornaOValorApertado = (letra) => {
        switch (letra) {
            case 'a':
                return 1;
            case 'b':
                return 2;
            case 'c':
                return 3;
            case 'd':
                return 4;
            default:
              console.log("Desculpe erro na escolha da letra");
          }
    }
    const numeroDaAlternativa = retornaOValorApertado(String(valor).charAt(0));
    

    return  <>
        <TouchableOpacity 
            onPress={()=>acao(numeroDaAlternativa)}
            style={ checado==numeroDaAlternativa? estiloPadrao.alternativaMarcada : estiloPadrao.alternativaDesmarcada}>
            <Text style={ checado==numeroDaAlternativa? estiloPadrao.textoMarcado : estiloPadrao.textoDesmarcado }> {valor} </Text>
        </TouchableOpacity>
    </>
}