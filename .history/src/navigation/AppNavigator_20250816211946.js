import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AvisosList from "../avisos/AvisosList";
import AvisoDetalhe from "../avisos/AvisoDetalhe";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AvisosList">
        <Stack.Screen name="AvisosList" component={AvisosList} options={{ title: "Avisos" }} />
        <Stack.Screen name="AvisoDetalhe" component={AvisoDetalhe} options={{ title: "Detalhe do Aviso" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
