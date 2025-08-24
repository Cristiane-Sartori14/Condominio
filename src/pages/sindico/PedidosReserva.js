import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Button from "../../components/Button"; 

export default function PedidosReserva({ navigation }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const dadosMock = [
      { id: 1, area: "Churrasqueira", solicitante: "João", data: "30/08/2025" },
      { id: 2, area: "Salão de Festas", solicitante: "Maria", data: "02/09/2025" },
      { id: 3, area: "Piscina", solicitante: "Carlos", data: "05/09/2025" },
    ];
    setPedidos(dadosMock);
  }, []);

  const handleAprovar = (id) => {
    Alert.alert("Reserva Aprovada", `Pedido ${id} aprovado com sucesso!`);
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  const handleRecusar = (id) => {
    Alert.alert("Reserva Recusada", `Pedido ${id} recusado.`);
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  const renderPedido = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.titulo}>{item.area}</Text>
      <Text>Solicitante: {item.solicitante}</Text>
      <Text>Data: {item.data}</Text>
      
      <View style={styles.botoes}>
        <Button 
          title="Aprovar" 
          onPress={() => handleAprovar(item.id)} 
          variant="secondary" 
        />
        <Button 
          title="Recusar" 
          onPress={() => handleRecusar(item.id)} 
          variant="primary" 
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pedidos de Reserva</Text>

      {pedidos.length === 0 ? (
        <Text style={styles.semPedidos}>Nenhum pedido pendente.</Text>
      ) : (
        <FlatList
          data={pedidos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPedido}
        />
      )}

      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        variant="secondary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff" 
  },
  header: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 15, 
    textAlign: "center" 
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  semPedidos: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
});
