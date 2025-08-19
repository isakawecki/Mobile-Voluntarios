import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';


import TelaInicio from './screens/TelaInicio';
import TelaInicioDois from './screens/TelaInicioDois';
import CadastrarUsuario from './screens/CadastrarUsuario';
import Login from './screens/Login';
import RecuperacaoSenha from './screens/RecuperacaoSenha';
import TelaSMS from './screens/TelaSMS';
import TelaEmail from './screens/TelaEmail';



const Pilha = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'NunitoSans-Light': require('./assets/fonts/NunitoLight-K7dKW.ttf'),
  });

  // Verificação se as fontes carregaram
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
        <Pilha.Screen name="Inicio" component={TelaInicio} />
        <Pilha.Screen name="InicioDois" component={TelaInicioDois} />
        <Pilha.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
        <Pilha.Screen name="Login" component={Login} />
        <Pilha.Screen name="RecuperacaoSenha" component={RecuperacaoSenha} />
        <Pilha.Screen name="TelaSMS" component={TelaSMS} />
        <Pilha.Screen name="TelaEmail" component={TelaEmail} />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}
