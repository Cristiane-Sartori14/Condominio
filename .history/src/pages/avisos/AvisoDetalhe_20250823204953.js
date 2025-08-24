import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button"; // Importando o componente Button
import TextArea from "../../components/TextArea"; // Importando o componente TextArea

export default function AvisoDetalhe({ route, navigation }) {
  const { aviso } = route.params;

  // Adicionando um estado para a edição
  const [editedDescription, setEditedDescription] = useState(aviso.descricao);

  const handleSave = () => {
    // Lógica para salvar a edição (ex: chamar uma API)
    console.log("Descrição editada:", editedDescription);
    // navigation.goBack(); // Voltar para a tela anterior
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{aviso.titulo}</Text>
      
      {/* Usando o componente TextArea para a descrição editável */}
      <TextArea
        value={editedDescription}
        onChangeText={setEditedDescription}
        placeholder="Adicione uma descrição..."
        style={styles.textArea}
      />

      <View style={styles.buttonContainer}>
        {/* Usando o componente Button para Voltar */}
        <Button
          title="Voltar"
          onPress={handleGoBack}
          variant="outline" // Exemplo de uso de variante
        />

        {/* Usando o componente Button para Salvar */}
        <Button
          title="Salvar Alterações"
          onPress={handleSave}
          variant="primary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff" 
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  textArea: {
    marginBottom: 20,
    height: 150,
  },
  buttonContainer: {
    marginTop: 20,
  }
});