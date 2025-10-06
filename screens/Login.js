import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const usuariosJSON = await AsyncStorage.getItem("usuarios");
      const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];

      const usuario = usuarios.find(
        (u) => u.email === email && u.senha === senha
      );

      if (usuario) {
        await AsyncStorage.setItem("usuario", JSON.stringify(usuario)); // salva o usuário logado
        Alert.alert("Bem-vindo!", `Olá, ${usuario.nome}!`);
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", "Email ou senha incorretos!");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao acessar os dados.");
    }
  };

  const handleCancelar = () => {
    navigation.goBack();
  };

  const handleRecuperacao = () => {
    navigation.navigate("RecuperacaoSenha");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/fundo2.png")}
            style={styles.backgroundImage}
            resizeMode="cover"
          />

          <View style={styles.content}>
            <View style={styles.tituloContainer}>
              <Text style={styles.titulo}>Login</Text>
              <Image
                source={require("../assets/images/logoOng.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.subtexto}>Bom te ver de novo!</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity onPress={handleRecuperacao}>
              <Text style={styles.textoEsqueceu}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={handleLogin}>
              <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancelar}>
              <Text style={styles.textoCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingTop: 50,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "110%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 50,
  },
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 150,
    paddingRight: 130,
  },
  titulo: {
    fontSize: 50,
    color: "#000000ff",
    marginRight: 10,
    fontFamily: 'Raleway-Bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  subtexto: {
    fontSize: 19,
    color: "#000000ff",
    marginBottom: 20,
    paddingRight: 159,
    marginTop: -10,
    fontFamily: 'NunitoSans-Light',
  },
  input: {
    backgroundColor: "#f1f1f1",
    width: "90%",
    height: 48,
    marginTop: 12,
    borderRadius: 10,
    fontSize: 15,
    padding: 10,
  },
  botao: {
    backgroundColor: "#b20000",
    paddingVertical: 18,
    width: "90%",
    borderRadius: 20,
    marginTop: 20,
  },
  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontFamily: 'NunitoSans-Light',
  },
  textoCancelar: {
    fontSize: 16,
    color: "#000000ff",
    marginTop: 17,
    fontFamily: 'NunitoSans-Light',
  },
  textoEsqueceu: {
    fontSize: 15,
    color: "#b20000",
    marginTop: 27,
    fontFamily: 'NunitoSans-Light',
    textDecorationLine: "underline",
    left: 87,
  },
});
