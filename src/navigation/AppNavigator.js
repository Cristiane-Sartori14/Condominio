import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AvisosList from "../pages/avisos/AvisosList";
import AvisoDetalhe from "../pages/avisos/AvisoDetalhe";
import PedidosReserva from "../pages/sindico/PedidosReserva";
import TelaInicial from "../pages/TelaInicial";
import SindicoList from "../pages/sindico/SindicoList";
import Reserva from "../pages/reserva/Reserva";
import MinhasReservas from "../pages/reserva/MinhasReservas";
import BoasVindas from "../pages/cadastro/BoasVindas";
import EscolherCadastro from "../pages/cadastro/EscolherCadastro";
import CadastrarMorador from "../pages/cadastro/CadastrarMorador";
import CadastrarSindico from "../pages/cadastro/CadastrarSindico";
import CadastrarTipoVisitante from "../pages/cadastro/CadastrarTipoVisitante";
import CadastrarVisitanteRecorrente from "../pages/cadastro/CadastrarVisitanteRecorrente";
import CadastrarVisitantePontual from "../pages/cadastro/CadastrarVisitantePontual";
import CadastrarPrestadorServico from "../pages/cadastro/CadastrarPrestadorServico";
import RecuperarSenha from "../pages/cadastro/RecuperarSenha";
import RecuperarSenha2 from "../pages/cadastro/RecuperarSenha2";
import RecuperarSenha3 from "../pages/cadastro/RecuperarSenha3";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoasVindas">
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ title: "Inicio" }}
        />
        <Stack.Screen
          name="AvisosList"
          component={AvisosList}
          options={{ title: "Avisos" }}
        />
        <Stack.Screen
          name="AvisoDetalhe"
          component={AvisoDetalhe}
          options={{ title: "Detalhe do Aviso" }}
        />
        <Stack.Screen
          name="SindicoList"
          component={SindicoList}
          options={{ title: "Síndico" }}
        />
        <Stack.Screen
          name="PedidosReserva"
          component={PedidosReserva}
          options={{ title: "Síndico" }}
        />
        <Stack.Screen
          name="CalendarioDeReservas"
          component={Reserva}
          options={{ title: "Calendário de Reservas" }}
        />
        <Stack.Screen
          name="MinhasReservas"
          component={MinhasReservas}
          options={{ title: "Minhas Reservas" }}
        />
        <Stack.Screen
          name="BoasVindas"
          component={BoasVindas}
          options={{ title: "Boas vindas" }}
        />
        <Stack.Screen
          name="EscolherCadastro"
          component={EscolherCadastro}
          options={{ title: "Escolher Cadastro" }}
        />
        <Stack.Screen
          name="CadastrarMorador"
          component={CadastrarMorador}
          options={{ title: "Cadastro de Morador" }}
        />
        <Stack.Screen
          name="CadastrarSindico"
          component={CadastrarSindico}
          options={{ title: "Cadastro de Síndico" }}
        />
        <Stack.Screen
          name="CadastrarTipoVisitante"
          component={CadastrarTipoVisitante}
          options={{ title: "Cadastro de Visitante" }}
        />
        <Stack.Screen
          name="CadastrarVisitantePontual"
          component={CadastrarVisitantePontual}
          options={{ title: "Cadastro de Visitante Pontual" }}
        />
        <Stack.Screen
          name="CadastrarVisitanteRecorrente"
          component={CadastrarVisitanteRecorrente}
          options={{ title: "Cadastro de Visitante Recorrente" }}
        />
        <Stack.Screen
          name="CadastrarPrestadorServico"
          component={CadastrarPrestadorServico}
          options={{ title: "Cadastro de Prestador de Serviços" }}
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{ title: "Recuperar senha" }}
        />
        <Stack.Screen
          name="RecuperarSenha2"
          component={RecuperarSenha2}
          options={{ title: "Recuperar senha" }}
        />
        <Stack.Screen
          name="RecuperarSenha3"
          component={RecuperarSenha3}
          options={{ title: "Recuperar senha" }}
        />                
      </Stack.Navigator>
    </NavigationContainer>
  );
}
