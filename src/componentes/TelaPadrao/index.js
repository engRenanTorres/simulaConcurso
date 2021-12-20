import React from 'react';
import { ScrollView, StatusBar, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import estilos from '../../estilos';

export default function TelaPadrao ({ children }){
    return (
        <SafeAreaView style = {estilos.preencher}> 
            <StatusBar/>
                <ScrollView>
                    <KeyboardAvoidingView
                    behavior={Platform.OS == "ios"? "padding" : "height"}
                    style={estilos.preencher}>
                        {children}
                    </KeyboardAvoidingView>
                </ScrollView>
        </SafeAreaView>

    )
}
