import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./telas/Home";
import Simulado from "./telas/Simulado";
import Gabarito from "./telas/Gabarito";
import Pontuacao from "./telas/Pontuacao";
import Provider from "./provider";
import Configuracoes from "./telas/Configuracoes";

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Provider>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                    component={Home}
                    options={{headerShown:false}}
                />
                <Stack.Screen name="Simulado"
                    component={Simulado}
                    options={{headerShown:false}}
                />
                <Stack.Screen name="Pontuacao"
                    component={Pontuacao}
                    options={{headerShown:false}}
                />
                <Stack.Screen name="Corrigir"
                    component={Gabarito}
                    options={{headerShown:false}}
                />
                <Stack.Screen name="Configuracoes"
                    component={Configuracoes}
                    options={{headerShown:false}}
                />
            </Stack.Navigator>
            {/* <Tab.Navigator>
                <Tab.Screen name= "Simulado" component={Simulado}/>
                <Tab.Screen name= "TelaInicial" component={TelaInicial}/>
            </Tab.Navigator> */}
        </Provider>
    </NavigationContainer>
}