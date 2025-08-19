import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const TelaInicio = ({ navigation }) => {
  useEffect(() => {
    const tempo = setTimeout(() => {
      navigation.replace('InicioDois');
    }, 3000);

    return () => clearTimeout(tempo);
  }, [navigation]);

  return (
    <View style={estilos.container}>
      <Image
        source={require('../assets/images/logoOng.png')}
        style={estilos.logo}
        resizeMode="contain"
      />
      <Text style={estilos.texto}>Voluntários</Text>
    </View>
  );
};

export default TelaInicio;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 124,
    height: 125,
  },
  texto: {
    fontSize: 46,
    fontFamily: 'Raleway-Bold',
  },
});
