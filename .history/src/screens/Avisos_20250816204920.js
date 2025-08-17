import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Avisos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Avisos do Condomínio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold"
  }
});
