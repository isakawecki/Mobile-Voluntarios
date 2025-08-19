import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, ScrollView, StyleSheet, Alert, Image, KeyboardAvoidingView, TextInput } from 'react-native';

const TelaEmail = ({ navigation }) => {  
  const [email, setEmail] = useState(''); 

  const handleCancelar = () => {
    navigation.goBack();
  };

  const handleSalvar = () => {
    if (!email) {
      Alert.alert("Erro", "Por favor, insira um email válido.");
      return;
    }

   
    Alert.alert("Email Enviado", `Um link de recuperação foi enviado para: ${email}`);
    //navigation.();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

          <Image
            source={require('../assets/images/fundo3.png')}
            style={styles.fundo3}
            resizeMode="contain"
          />

          <Image
            source={require('../assets/images/logoOngCirculo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.titulo}>Recuperação de senha</Text>
          <Text style={styles.subtitulo}>Digite seu email para recuperar a senha</Text>

          {/* Campo de Input para Email */}
          <TextInput
            style={styles.inputEmail}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Botão para confirmar */}
          <TouchableOpacity style={styles.botaoProximo} onPress={handleSalvar}>
            <Text style={styles.textoProximo}>Enviar</Text>
          </TouchableOpacity>

          {/* Botão de Cancelar */}
          <TouchableOpacity onPress={handleCancelar} style={styles.botaoCancelar}>
            <Text style={styles.textoCancelar}>Cancelar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    overflow: "hidden",
  },

  fundo3: {
    width: 605,
    left: 160,
    bottom: 260,
  },
  logo: {
    width: 155,
    height: 130,
    bottom: 390,
  },

  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    bottom: 350,
    fontFamily: 'Raleway-Bold',
  },
  subtitulo: {
    fontSize: 19,
    marginBottom: 20,
    bottom: 330,
    textAlign: 'center',
    color: '#000000ff',
    fontFamily: 'NunitoSans-Light',
  },
  inputEmail: {
    height: 50,
    width: '90%',
    borderColor: '#f1f1f1',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor:"#f1f1f1",
    paddingLeft: 10,
    fontSize: 16,
    color: '#333',
    bottom: 300,
  },

  botaoProximo: {
    backgroundColor: '#b20000',
    paddingVertical: 18,
    paddingHorizontal: 105,
    borderRadius: 20,
    bottom: 130,
  },
  textoProximo: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'NunitoSans-Light',
  },
  textoCancelar: {
    fontSize: 16,
    color: "#000000ff",
    marginTop: 17,
    fontFamily: 'NunitoSans-Light',
    bottom: 130,
  },
});

export default TelaEmail;
