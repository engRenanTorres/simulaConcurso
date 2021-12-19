import React from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';
import estilos from '../../estilos';

export default function TelaPadrao ({ children }){
    return (
        <SafeAreaView style = {estilos.preencher}> 
            <StatusBar/>
            {/* <ScrollView style={{backgroundColor='#333', padding=15}}> */}
                {children}
            {/* </ScrollView> */}
        </SafeAreaView>

    )
}
