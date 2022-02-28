import React from 'react';
import { ScrollView, StatusBar, SafeAreaView, KeyboardAvoidingView, Platform, ImageBackground,View } from 'react-native';
import estilos from '../../estilosGerais';


const imagemFundo = { uri:'../../../assets/icon.png'}

export default function TelaPadrao ({ children }){
    return (
        <SafeAreaView style = {estilos.preencher}> 
            <StatusBar/>
    
                
                    <ImageBackground source={require('../../../assets/FundoRenan.png')} resizeMode="cover"  style={estilos.image}>
                        <KeyboardAvoidingView
                        behavior={Platform.OS == "ios"? "padding" : "height"}
                        style={estilos.preencher}>
                            {children}
                        </KeyboardAvoidingView>
                    </ImageBackground>

        </SafeAreaView>

    )
}
