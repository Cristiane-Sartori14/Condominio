import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AvisosList from "../pages/avisos/AvisosList";
import AvisoDetalhe from "../pages/avisos/AvisoDetalhe";
import Calendario from "../pages/reservas/Calendario";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AvisosList">
        <Stack.Screen name="AvisosList" component={AvisosList} options={{ title: "Avisos" }} />
        <Stack.Screen name="AvisoDetalhe" component={AvisoDetalhe} options={{ title: "Detalhe do Aviso" }} />
      </Stack.Navigator>
      <Stack.Navigator initialRouteName="Calendario">
        <Stack.Screen name="Calendario" component={Calendario} options={{ title: "Calendário" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
