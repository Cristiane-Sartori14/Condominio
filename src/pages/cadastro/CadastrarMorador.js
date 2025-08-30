import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView 
} from "react-native";
import { Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CadastrarMorador({ navigation }) {
  const [nome, setNome] = useState("");
  const [apartamento, setApartamento] = useState("");
  const [bloco, setBloco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [situacao, setSituacao] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
  Alert.alert(
      "Sucesso",
      "Morador cadastrado com sucesso!",
      [
       {
           text: "OK",
           onPress: () => navigation.navigate("TelaInicial"),
       },
      ]
    );
   };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView 
        contentContainerStyle={styles.scroll} 
        enableOnAndroid={true}
        extraScrollHeight={20}
      >
        {/* Logo */}
        <Text style={styles.logo}>ConectaCondo</Text>
        <Text style={styles.titulo}>Cadastro de morador</Text>

        {/* Nome */}
        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        {/* Apartamento e Bloco */}
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Apartamento</Text>
            <TextInput
              style={styles.input}
              placeholder="101"
              value={apartamento}
              onChangeText={setApartamento}
            />
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Bloco/Torre</Text>
            <TextInput
              style={styles.input}
              placeholder="A"
              value={bloco}
              onChangeText={setBloco}
            />
          </View>
        </View>

        {/* Telefone e Nascimento */}
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="(11) 99999-9999"
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Data de Nascimento</Text>
            <TextInput
              style={styles.input}
              placeholder="dd/mm/aaaa"
              value={nascimento}
              onChangeText={setNascimento}
            />
          </View>
        </View>

        {/* Situação */}
        <Text style={styles.label}>Situação</Text>
        <TextInput
          style={styles.input}
          placeholder="Proprietário / Inquilino / Dependente"
          value={situacao}
          onChangeText={setSituacao}
        />

        {/* E-mail */}
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Senha */}
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        {/* Botão Cadastrar */}
        <TouchableOpacity 
        style={styles.botao} 
        onPress={handleCadastro}>
          <Text style={styles.textoBotao}>Cadastrar morador</Text>
        </TouchableOpacity>

        {/* Voltar */}
        <TouchableOpacity 
          style={styles.botaoVoltar} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={28} color="black" />
        </TouchableOpacity>
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
    padding: 20,
    paddingBottom: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col: {
    flex: 1,
    marginRight: 10,
  },
  botao: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  botaoVoltar: {
    marginTop: 30,
    alignSelf: "center",
  },
});
