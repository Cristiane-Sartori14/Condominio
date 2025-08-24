import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome5, Feather } from "@expo/vector-icons";

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ConectaCondo</Text>
      <MenuItem
        icon={<MaterialIcons name="event" size={24} color="#444" />}
        label="Reservas"
        onPress={() => {}}
      />
      <MenuItem
        icon={<Feather name="bell" size={24} color="#444" />}
        label="Avisos"
        onPress={() => navigation.navigate("AvisosList")}
      />
      <MenuItem
        icon={<FontAwesome5 name="box" size={24} color="#444" />}
        label="Encomendas"
        onPress={() => {}}
      />
      <MenuItem
        icon={<FontAwesome5 name="user-friends" size={24} color="#444" />}
        label="Visitantes"
        onPress={() => {}}
      />
      <MenuItem
        icon={<Feather name="user" size={24} color="#444" />}
        label="Minha conta"
        onPress={() => {}}
      />
      <MenuItem
        icon={<FontAwesome5 name="user-tie" size={24} color="#444" />}
        label="Síndico"
        onPress={() => navigation.navigate("SindicoList")}
      />
    </View>
  );
}

function MenuItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
      <MaterialIcons name="chevron-right" size={24} color="#aaa" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    fontFamily: "sans-serif",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  icon: {
    marginRight: 18,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: "#444",
  },
});