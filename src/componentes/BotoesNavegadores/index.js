import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import estilosGerais from "../../estilosGerais";

export default function BotoesNavegadores ({navigateDirection, functionType, art, variablesTransfer, children}) {
    const navigation = useNavigation();
    let navigationFunciton = navigation.navigate;
    if(functionType != null) navigationFunciton = functionType;
    return(
        
        <TouchableOpacity
            onPress={() => navigationFunciton(navigateDirection,variablesTransfer)}
            >
                <Text style={estilosGerais.botoesNavegacao}><AntDesign name={art} size={14} color="white" /> {children} </Text>
        </TouchableOpacity>
    )
}