import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function BoasVindas({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scroll}
        enableOnAndroid={true}
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.logo}>ConectaCondo</Text>

        <Text style={styles.titulo}>Boas vindas</Text>
        <Text style={styles.subtitulo}>
          Insira o endereço de e-mail associado à sua organização
        </Text>

        <Text style={styles.label}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
          <Text style={styles.linkSenha}>Esqueci a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("TelaInicial")}
        >
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.textoRodape}>
          Não possui conta?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("EscolherCadastro")}
          >
            Solicitar acesso
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: "#333",
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  linkSenha: {
    alignSelf: "flex-end",
    marginBottom: 25,
    color: "#000",
    fontSize: 14,
  },
  botao: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 25,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  textoRodape: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  link: {
    color: "#000",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
