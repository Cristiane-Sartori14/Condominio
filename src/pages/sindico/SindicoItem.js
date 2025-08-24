import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function SindicoItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.titulo}>{item.titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
});