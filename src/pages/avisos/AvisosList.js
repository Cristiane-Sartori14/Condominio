import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AvisoItem from "../avisos/AvisoItem";

const avisos = [
  {
    id: "1",
    titulo: "Manutenção na piscina",
    descricao: "A piscina ficará fechada para manutenção no sábado.",
  },
  {
    id: "2",
    titulo: "Reunião de condomínio",
    descricao: "A reunião ocorrerá dia 20/08 às 19h no salão de festas.",
  },
];

export default function AvisosList({ navigation }) {
  const handlePressItem = (item) => {
    navigation.navigate("AvisoDetalhe", { aviso: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={avisos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AvisoItem
            aviso={item}
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