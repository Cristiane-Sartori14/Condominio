import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EscolherCadastro({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>ConectaCondo</Text>

      <Text style={styles.titulo}>Gostaria de cadastrar:</Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("CadastrarMorador")}
      >
        <View style={styles.itemLeft}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.itemText}>Morador</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("CadastrarSindico")}
      >
        <View style={styles.itemLeft}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.itemText}>Síndico</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("CadastrarTipoVisitante")}
      >
        <View style={styles.itemLeft}>
          <Ionicons name="people-outline" size={24} color="black" />
          <Text style={styles.itemText}>Visitante</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 50,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
