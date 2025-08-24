import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Button from "../components/Button"; // ajuste o caminho conforme sua estrutura
import TextArea from "../components/TextArea"; // ajuste o caminho conforme sua estrutura

export default function AvisoDetalhe({ route }) {
  const { aviso } = route.params;
  const [resposta, setResposta] = useState("");

  const handleResponder = () => {
    Alert.alert("Resposta enviada!", resposta);
    setResposta(""); // limpa o campo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{aviso.titulo}</Text>
      <Text style={styles.descricao}>{aviso.descricao}</Text>

      <TextArea
        value={resposta}
        onChangeText={setResposta}
        placeholder="Digite sua resposta aqui..."
      />

      <Button title="Responder" onPress={handleResponder} variant="primary" />
      <Button title="Cancelar" onPress={() => setResposta("")} variant="secondary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  descricao: { fontSize: 16, color: "#333", marginBottom: 20 },
});
