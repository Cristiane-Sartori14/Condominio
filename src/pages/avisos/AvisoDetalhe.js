import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AvisoDetalhe({ route }) {
  const { aviso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{aviso.titulo}</Text>
      <Text style={styles.descricao}>{aviso.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  descricao: { fontSize: 16, color: "#333" },
});
