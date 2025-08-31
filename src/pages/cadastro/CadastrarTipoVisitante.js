import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CadastrarTipoVisitante({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ConectaCondo</Text>

      <Text style={styles.titulo}>Tipo de visitante:</Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("CadastrarVisitanteRecorrente")}
      >
        <View style={styles.itemLeft}>
          <Ionicons name="people-outline" size={24} color="black" />
          <Text style={styles.itemText}>Visitante recorrente</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("CadastrarVisitantePontual")}
      >
        <View style={styles.itemLeft}>
          <Ionicons name="people-outline" size={24} color="black" />
          <Text style={styles.itemText}>Visitante pontual</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("CadastrarPrestadorServico")}
      >
        <View style={styles.itemLeft}>
          <Ionicons name="people-outline" size={24} color="black" />
          <Text style={styles.itemText}>Prestador de serviço</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  logo: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  botaoVoltar: {
    marginTop: 40,
    alignSelf: "center",
  },
});
