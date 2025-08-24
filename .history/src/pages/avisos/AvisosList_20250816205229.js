import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const avisos = [
  { id: "1", titulo: "Manutenção na piscina", descricao: "A piscina ficará fechada para manutenção no sábado." },
  { id: "2", titulo: "Reunião de condomínio", descricao: "A reunião ocorrerá dia 20/08 às 19h no salão de festas." },
];

export default function AvisosList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={avisos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("AvisoDetalhe", { aviso: item })}
          >
            <Text style={styles.titulo}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  titulo: { fontSize: 18, fontWeight: "bold" },
});
