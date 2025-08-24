import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SindicoItem from "../sindico/SindicoItem";

const sindico = [
  { id: "1", titulo: "Pedidos de Reserva" },
  { id: "2", titulo: "Criar Avisos" },
];

export default function SindicoList({ navigation }) {
  const handlePressItem = (item) => {
    if (item.id === "1") {
      navigation.navigate("PedidosReserva");
    } else if (item.id === "2") {
      navigation.navigate("CriarAviso");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sindico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SindicoItem
            item={item}
            onPress={() => handlePressItem(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
});