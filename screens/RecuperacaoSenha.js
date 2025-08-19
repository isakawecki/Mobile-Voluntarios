import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, ScrollView, StyleSheet, Alert, Image, KeyboardAvoidingView } from 'react-native';

const RecuperacaoSenha = ({ navigation }) => {  // Aqui adicionamos o 'navigation' como parâmetro
  const [metodoRecuperacao, setMetodoRecuperacao] = useState('');

  const handleCancelar = () => {
    navigation.goBack();
  };

  const handleConfirmar = () => {
    if (!metodoRecuperacao) { 
      Alert.alert("Erro", "Por favor, escolha um método de recuperação (SMS ou Email).");
      return;
    }

  
    if (metodoRecuperacao === 'SMS') {
      navigation.navigate('TelaSMS'); 
    } else if (metodoRecuperacao === 'Email') {
      navigation.navigate('TelaEmail');  
    }
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
          <Text style={styles.subtitulo}>Como você gostaria de recuperar sua senha?</Text>

          {/* Radio Button SMS */}
          <TouchableOpacity
            style={[styles.radioButtonContainer, metodoRecuperacao === 'SMS' && styles.radioButtonContainerSelected]}
            onPress={() => setMetodoRecuperacao('SMS')}
          >
            <View style={styles.radioButton}>
              {metodoRecuperacao === 'SMS' && <View style={styles.radioButtonSelected} />}
            </View>
            <Text style={[styles.radioButtonText, metodoRecuperacao === 'SMS' && styles.radioButtonTextSelected]}>SMS</Text>
          </TouchableOpacity>

          {/* Radio Button Email */}
          <TouchableOpacity
            style={[styles.radioButtonContainer, metodoRecuperacao === 'Email' && styles.radioButtonContainerSelected]}
            onPress={() => setMetodoRecuperacao('Email')}
          >
            <View style={styles.radioButton}>
              {metodoRecuperacao === 'Email' && <View style={styles.radioButtonSelected} />}
            </View>
            <Text style={[styles.radioButtonText, metodoRecuperacao === 'Email' && styles.radioButtonTextSelected]}>Email</Text>
          </TouchableOpacity>

          {/* Botão para confirmar a escolha */}
          <TouchableOpacity style={styles.botaoProximo} onPress={handleConfirmar}>
            <Text style={styles.textoProximo}>Próximo</Text>
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
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    bottom: 320,
    backgroundColor: '#FFEBEB',
    width: 210,
    height: 50,
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 47,
  },

  radioButtonContainerSelected: {
    backgroundColor: '#F2A4A4',
  },

  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: '#F8CECE',
    borderColor: '#b20000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#b20000',
  },
  radioButtonText: {
    fontSize: 18,
    color: '#333',
  },
  radioButtonTextSelected: {
    color: '#b20000',
  },
  botaoProximo: {
    backgroundColor: '#b20000',
    paddingVertical: 18,
    paddingHorizontal: 105,
    borderRadius: 20,
    bottom: 215,
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
    bottom: 210,
  },
});

export default RecuperacaoSenha;
