import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Notificacoes = ({ navigation }) => {
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
  const [novosEventosAtivos, setNovosEventosAtivos] = useState(true);
  const [minhaAgendaAtiva, setMinhaAgendaAtiva] = useState(true);

  // Função para ativar/desativar as notificações gerais
  const toggleNotificacoes = () => {
    const novoEstado = !notificacoesAtivas;
    setNotificacoesAtivas(novoEstado);
    if (!novoEstado) {
      setNovosEventosAtivos(false);
      setMinhaAgendaAtiva(false);
    } else {
      setNovosEventosAtivos(true);
      setMinhaAgendaAtiva(true);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
            <Ionicons name="arrow-back" size={28} color="#000000ff" />
          </TouchableOpacity>
          <Text style={styles.titulo}>Notificações</Text>
        </View>

    

        {/* Seções de notificações */}
        <View style={styles.opcoesContainer}>
        

          {/* Notificações gerais */}
          <View style={[styles.opcao, styles.destaque]}>
            <View style={styles.opcaoEsquerda}>
              <Ionicons name="notifications-outline" size={22} color="#000000ff" />
              <Text style={[styles.textoOpcao, { fontWeight: 'bold' }]}>Ativar Notificações</Text>
            </View>
            <Switch
              value={notificacoesAtivas}
              onValueChange={toggleNotificacoes}
              trackColor={{ false: "#e0e0e0", true: "#707070" }}
              thumbColor={notificacoesAtivas ? "#fff" : "#95989A"}
            />
          </View>
          <View style={styles.linhaOpcao} />

          {/* Novos Eventos */}
          <View style={styles.opcao}>
            <View style={styles.opcaoEsquerda}>
              <Ionicons name="calendar-outline" size={22} color={notificacoesAtivas ? "#000000ff" : "#95989A"} />
              <Text style={[styles.textoOpcao, { color: notificacoesAtivas ? "#000000ff" : "#95989A" }]}>
                Novos Eventos
              </Text>
            </View>
            <Switch
              value={novosEventosAtivos}
              onValueChange={() => setNovosEventosAtivos(!novosEventosAtivos)}
              disabled={!notificacoesAtivas}
              trackColor={{ false: "#e0e0e0", true: "#707070" }}
              thumbColor={novosEventosAtivos ? "#fff" : "#95989A"}
            />
          </View>
         

          {/* Minha Agenda */}
          <View style={styles.opcao}>
            <View style={styles.opcaoEsquerda}>
              <Ionicons name="time-outline" size={22} color={notificacoesAtivas ? "#000000ff" : "#95989A"} />
              <Text style={[styles.textoOpcao, { color: notificacoesAtivas ? "#000000ff" : "#95989A" }]}>
                Minha Agenda
              </Text>
            </View>
            <Switch
              value={minhaAgendaAtiva}
              onValueChange={() => setMinhaAgendaAtiva(!minhaAgendaAtiva)}
              disabled={!notificacoesAtivas}
              trackColor={{ false: "#e0e0e0", true: "#707070" }}
              thumbColor={minhaAgendaAtiva ? "#fff" : "#95989A"}
            />
          </View>
        
        </View>
      </ScrollView>
    </View>
  );
};

export default Notificacoes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 10,
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
  opcoesContainer: {
    marginTop: 10,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 10,
  },
  opcao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  opcaoEsquerda: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
 
  textoOpcao: {
    fontSize: 16,
    color: "#000000ff",
  },
  linhaOpcao: {
    height: 1,
    backgroundColor: "#e0e0e0",
    width: "100%",
    marginBottom: 20,
  },
  destaque: {
   
    borderRadius: 8,
   
  },
});
