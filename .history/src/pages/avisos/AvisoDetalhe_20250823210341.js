// src/pages/avisos/AvisoDetalhe.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button"; 

export default function AvisoDetalhe({ route, navigation }) {
  const { aviso } = route.params;
 
  const handleMarkAsSeen = () => {
    console.log(`Aviso ID ${aviso.id} marcado como visto.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{aviso.titulo}</Text>
      
      {/* Exibindo a descrição do aviso com um Text normal */}
      <Text style={styles.descricao}>
        {aviso.descricao}
      </Text>

      {/* Usando o componente Button para a ação "Marcar como Visto" */}
      <Button
        title="Marcar como Visto"
        onPress={handleMarkAsSeen}
        variant="primary"
      />
      
      {/* Opcional: Adicionar um botão para voltar */}
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        variant="secondary" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff",
    justifyContent: "space-between", 
    paddingBottom: 40 
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  descricao: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20, 
  },
});