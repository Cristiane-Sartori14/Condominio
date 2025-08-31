import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CriarAviso() {
  const navigation = useNavigation();

  const [data, setData] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [avisos, setAvisos] = useState([]);

  const handlePublicar = () => {
    Alert.alert("Aviso Criado!");
    setAvisos([...avisos, { data, assunto, mensagem }]);
    setData("");
    setMensagem("");
    setAssunto("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criação de Aviso</Text>

      <Text style={styles.label}>Data</Text>
      <TextInput
        style={styles.input}
        placeholder="dd/mm/aa"
        value={data}
        onChangeText={setData}
      />

      <Text style={styles.label}>Assunto</Text>
      <TextInput
        style={styles.input}
        placeholder="Texto"
        value={assunto}
        onChangeText={setAssunto}
      />

      <Text style={styles.label}>Mensagem</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Texto"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.publishButton} onPress={handlePublicar}>
        <Text style={styles.publishText}>Publicar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 24,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  publishButton: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 16,
  },
  publishText: {
    color: "#fff",
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#CFF09E",
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
  },
  backText: {
    color: "#000",
    fontWeight: "bold",
  },
});
