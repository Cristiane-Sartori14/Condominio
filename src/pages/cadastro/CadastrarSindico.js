import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

export default function CadastrarSindico({ navigation }) {
  const [nome, setNome] = useState("");
  const [apartamento, setApartamento] = useState("");
  const [bloco, setBloco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [documento, setDocumento] = useState("");
  const [situacao, setSituacao] = useState("");
  const [inicioMandato, setInicioMandato] = useState("");
  const [fimMandato, setFimMandato] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    Alert.alert("Sucesso", "Síndico cadastrado com sucesso!", [
      {
        text: "OK",
        onPress: () => navigation.navigate("TelaInicial"),
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={20}
        keyboardOpeningTime={0}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.logo}>ConectaCondo</Text>
        <Text style={styles.titulo}>Cadastro de síndico</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Apartamento"
            value={apartamento}
            onChangeText={setApartamento}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Bloco/Torre"
            value={bloco}
            onChangeText={setBloco}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Telefone"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Documento (CPF ou RG)"
          value={documento}
          onChangeText={setDocumento}
        />
        <TextInput
          style={styles.input}
          placeholder="Situação (Proprietário/Inquilino/Síndico contratado)"
          value={situacao}
          onChangeText={setSituacao}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de início do mandato"
          value={inicioMandato}
          onChangeText={setInicioMandato}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de término do mandato (Se houver)"
          value={fimMandato}
          onChangeText={setFimMandato}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
          <Text style={styles.botaoTexto}>Cadastrar síndico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  botaoVoltar: {
    marginTop: 20,
    alignSelf: "center",
  },
});
