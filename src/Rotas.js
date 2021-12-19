import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Simulado from "./telas/Simulado";
import Gabarito from "./telas/Gabarito";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name= "Simulado" component={Simulado}/>
            {/* <Tab.Screen name= "Gabarito" component={Gabarito}/> */}
        </Tab.Navigator>
    </NavigationContainer>
}