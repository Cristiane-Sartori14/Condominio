import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useReserva } from "../contexts/ReservaContext";

export default function ReservasList() {
  const { reservas, removerReserva } = useReserva();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.row}>
          <View
            style={[
              styles.dot,
              {
                backgroundColor:
                  item.status === "Aprovada" ? "#C3EA93" : "black",
              },
            ]}
          />
          <Text style={styles.data}>{item.data}</Text>
          <Text style={styles.horario}>
            {item.inicio}-{item.fim}
          </Text>
        </View>

        <View
          style={[
            styles.status,
            item.status === "Aprovada" ? styles.aprovada : styles.aguardando,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              item.status === "Aprovada"
                ? styles.aprovadaText
                : styles.aguardandoText,
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.local}>{item.local}</Text>

        <TouchableOpacity onPress={() => removerReserva(item.id)}>
          <MaterialCommunityIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={reservas}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 6,
  },
  data: {
    fontSize: 14,
    color: "#374151",
    marginRight: 6,
  },
  horario: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111827",
  },
  local: {
    fontSize: 16,
    color: "#111827",
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  aprovada: {
    backgroundColor: "#C3EA93",
  },
  aprovadaText: {
    color: "black",
    fontWeight: "600",
  },
  aguardando: {
    backgroundColor: "#111827",
  },
  aguardandoText: {
    color: "white",
    fontWeight: "600",
  },
  statusText: {
    fontSize: 12,
  },
});
