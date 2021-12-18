import React from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';

export default function TelaPadrao (){
    return (
        <SafeAreaView> 
            <StatusBar/>
            <ScrollView style={{backgroundColor='#333', padding=15}}>

            </ScrollView>
        </SafeAreaView>

    )
}
