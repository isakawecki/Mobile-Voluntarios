import React, { useState } from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";

const CadastrarUsuario = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  const handleCriar = () => {
    // Verificar se algum campo está vazio
    if (!nome || !email || !cpf || !telefone || !senha) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
      return;
    }

    // Caso todos os campos estejam preenchidos
    Alert.alert("Usuário criado!", `Nome: ${nome}\nEmail: ${email}`);
  };

  const handleCancelar = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={estilos.container}>
          <Image 
            source={require("../assets/images/fundo1.png")} 
            style={estilos.image} 
          />

          <Text style={estilos.texto}>Cadastrar {"\n"}usuário</Text>

          <TextInput
            style={estilos.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={estilos.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={estilos.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
          />

          <TextInput
            style={estilos.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />

          <TextInput
            style={estilos.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />

          <View style={estilos.areaInferior}>
            <TouchableOpacity style={estilos.botaoCriar} onPress={handleCriar}>
              <Text style={estilos.textoCadastrar}>Criar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancelar} style={estilos.botaoCancelar}>
              <Text style={estilos.textoCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CadastrarUsuario;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: 40,
  },

  image: {
    position: "absolute",
    top: -190,
    left: -160,
    width: "150%",
    height: 500,
    resizeMode: "cover",
  },

  texto: {
    fontSize: 50,
    fontFamily: "Raleway-Bold",
    paddingTop: 130,
    paddingRight: 120,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },

  input: {
    backgroundColor: "#f1f1f1",
    width: "86%",
    height: 48,
    marginTop: 14,
    borderRadius: 10,
    fontSize: 15,
    padding: 14,
  },

  areaInferior: {
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },

  botaoCriar: {
    backgroundColor: "#b20000",
    paddingVertical: 19,
    paddingHorizontal: 145,
    borderRadius: 20,
    marginTop: 55,
  },

  textoCadastrar: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "NunitoSans-Light", 
  },

  botaoCancelar: {
    marginTop: 10,
  },

  textoCancelar: {
    fontSize: 16,
    color: "#000",
    fontFamily: "NunitoSans-Light",
  },
});
