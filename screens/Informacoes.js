import React, { useState, useEffect } from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  ScrollView 
} from "react-native";  
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native"; 

const Informacoes = ({ navigation }) => {
  const [usuario, setUsuario] = useState(null);

  
  useFocusEffect(
    React.useCallback(() => {
      const carregarUsuario = async () => {
        try {
          const dadosUsuario = await AsyncStorage.getItem("usuario");
          if (dadosUsuario) {
            setUsuario(JSON.parse(dadosUsuario));
          }
        } catch (error) {
          console.log("Erro ao carregar usuário:", error);
        }
      };
      carregarUsuario();
    }, []) 
  );

  // Função para mascarar CPF
  const mascararCpf = (cpf) => {
    if (!cpf) return "CPF não disponível";  
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-**");
  };

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
            <Ionicons name="arrow-back" size={28} color="#000000ff" />
          </TouchableOpacity>
          <Text style={styles.titulo}>Informações Pessoais</Text>
        </View>

        <View style={styles.linha} />

        {/* Conteúdo de Informações Pessoais */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitulo}>{usuario.nome}</Text>

          <View style={styles.linhaInfo} />

          <Text style={styles.infoTitulo}>Email</Text>
          <Text style={styles.infoTexto}>{usuario.email}</Text> 

          <View style={styles.linhaInfo} />

          <Text style={styles.infoTitulo}>CPF</Text>
          <Text style={styles.infoTexto}>{mascararCpf(usuario.cpf)}</Text> 

          <View style={styles.linhaInfo} />

          <Text style={styles.infoTitulo}>Histórico de Doações</Text>
          <Text style={styles.infoTexto}>Você ainda não fez doações.</Text>

        </View>
      </ScrollView>
    </View>
  );
};

export default Informacoes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  voltar: {
    position: "absolute",
    left: 0,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000ff",
  },
  linha: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
    width: "100%",
  },
  infoContainer: {
    marginTop: 10,
  },
  infoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 5,
  },
  infoTexto: {
    fontSize: 16,
    color: "#000000ff",
    marginBottom: 15,
  },
  linhaInfo: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },

});
