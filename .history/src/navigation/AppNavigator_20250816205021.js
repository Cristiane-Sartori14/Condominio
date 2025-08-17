import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AvisosList from "../screens/AvisosList";
import AvisoDetalhe from "../screens/AvisoDetalhe";
import Avisos from "../screens/Avisos/Avisos";

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
