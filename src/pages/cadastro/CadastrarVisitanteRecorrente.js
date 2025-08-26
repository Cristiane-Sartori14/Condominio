import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Alert } from "react-native";

export default function CadastrarVisitanteRecorrente({ navigation }) {
  const [nome, setNome] = useState("");
  const [documento, setDocumento] = useState("");
  const [unidade, setUnidade] = useState("");
  const [morador, setMorador] = useState("");
  const [acesso, setAcesso] = useState("");

    const handleCadastro = () => {
    Alert.alert(
        "Sucesso",
        "Visitante recorrente cadastrado com sucesso!",
        [
         {
             text: "OK",
             onPress: () => navigation.navigate("TelaInicial"),
         },
        ]
      );
     };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ConectaCondo</Text>
      <Text style={styles.subtitle}>Visitante recorrente</Text>

      <Text style={styles.label}>Nome completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Documento (CPF ou RG)</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o documento"
        value={documento}
        onChangeText={setDocumento}
      />

      <Text style={styles.label}>Unidade visitada (Apartamento + Bloco/Torre)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Apto 101 - Bloco B"
        value={unidade}
        onChangeText={setUnidade}
      />

      <Text style={styles.label}>Nome do morador responsável</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do morador"
        value={morador}
        onChangeText={setMorador}
      />

      <Text style={styles.label}>Acesso (Dias/Horários permitidos)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Seg a Sex - 8h às 18h"
        value={acesso}
        onChangeText={setAcesso}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar visitante</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 30,
  },
  backArrow: {
    fontSize: 28,
    color: "#000",
  },
});
