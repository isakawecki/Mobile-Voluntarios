import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const TelaInicioDois = ({ navigation }) => {  

  const handleCadastro = () => {
    navigation.navigate('CadastrarUsuario'); 
  };

  const handleEntrar = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={estilos.container}>
     
      <View style={estilos.conteudo}>
        <Image
          source={require('../assets/images/logoOngCirculo.png')}
          style={estilos.logo}
          resizeMode="contain"
        />

        <Text style={estilos.textoPrincipal}>Voluntários</Text>
        <Text style={estilos.textoSecundario}>
          ONG voluntários torcendo para o bem
        </Text>
      </View>

      {/* Parte inferior com botão e texto com seta */}
      <View style={estilos.areaInferior}>
        <TouchableOpacity style={estilos.botaoCadastrar} onPress={handleCadastro}>
          <Text style={estilos.textoCadastrar}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEntrar} style={estilos.entrarContainer}>
          <Text style={estilos.textoEntrar}>Já tem uma conta? Entrar</Text>
          <Image
            source={require('../assets/images/Button.png')} 
            style={estilos.seta}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaInicioDois;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 70,
  },
  conteudo: {
    alignItems: 'center',
    marginTop: 120,
  },
  logo: {
    width: 154,
    height: 139,
    marginBottom: 20,
  },
  textoPrincipal: {
    fontSize: 52,
    fontFamily: 'Raleway-Bold', 
    color: '#000',
    textAlign: 'center',
  },
  textoSecundario: {
    fontSize: 19,
    fontFamily: 'NunitoSans-Light', 
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
  areaInferior: {
    alignItems: 'center',
    gap: 10,
  },
  botaoCadastrar: {
    backgroundColor: '#b20000',
    paddingVertical: 18,
    paddingHorizontal: 105,
    borderRadius: 20,
    
  },
  textoCadastrar: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'NunitoSans-Light', 
  },
  entrarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  textoEntrar: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'NunitoSans-Light',
    marginRight: 8,
  },
  seta: {
    width: 20,
    height: 20,
  },
});
