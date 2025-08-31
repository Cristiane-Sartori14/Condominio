import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AvisoItem({ aviso, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.titulo}>{aviso.titulo}</Text>
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
