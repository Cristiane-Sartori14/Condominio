import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AvisosList from "../pages/avisos/AvisosList";
import AvisoDetalhe from "../pages/avisos/AvisoDetalhe";
import PedidosReserva from "../pages/sindico/PedidosReserva";
import TelaInicial from "../pages/TelaInicial";
import SindicoList from "../pages/sindico/SindicoList";
import Reserva from "../pages/reserva/Reserva";
import MinhasReservas from "../pages/reserva/MinhasReservas";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ title: "Inicio" }} />
        <Stack.Screen name="AvisosList" component={AvisosList} options={{ title: "Avisos" }} />
        <Stack.Screen name="AvisoDetalhe" component={AvisoDetalhe} options={{ title: "Detalhe do Aviso" }} />
        <Stack.Screen name="SindicoList" component={SindicoList} options={{ title: "Síndico" }} />
        <Stack.Screen name="PedidosReserva" component={PedidosReserva} options={{ title: "Síndico" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
