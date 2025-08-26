import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";

export default function RecuperarSenha3({ navigation }) {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleConfirmar = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    Alert.alert(
          "Sucesso",
          "Senha alterada com sucesso!",
          [
           {
               text: "OK",
               onPress: () => navigation.navigate("BoasVindas"),
           },
          ]
        );

    console.log("Nova senha:", senha);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ConectaCondo</Text>
      <Text style={styles.subtitle}>Recuperar senha</Text>

      <Text style={styles.label}>Digite a senha nova</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.label}>Confirme a senha nova</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
        <Text style={styles.buttonText}>Alterar senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 18, marginBottom: 20 },
  label: { alignSelf: "flex-start", fontSize: 14, marginBottom: 5 },
  input: { width: "100%", borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 10, marginBottom: 15, fontSize: 16 },
  button: { backgroundColor: "#000", padding: 15, borderRadius: 10, width: "100%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  backButton: { marginTop: 30 },
  backArrow: { fontSize: 28, color: "#000" },
});
