import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Menu({ visible, onClose }) {

   const handleCancelar = () => {
    navigation.goBack();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.menu}>
          {/* Botão de fechar */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={30} color="#000" />
          </TouchableOpacity>

          {/* Opções do menu */}
          <View style={styles.menuItems}>
            {["Sobre a ONG", "Quero doar", "Minha agenda", "Eventos", "Central de ajuda"].map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <Text style={styles.menuText}>{item}</Text>
              </TouchableOpacity>
            ))}

            {/* Sair da conta */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleCancelar}>
              <Text style={styles.logoutText}>Sair da conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)", 
  },
  menu: {
    width: "70%",
    backgroundColor: "#fff", 
    height: "100%",
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 0 },
    position: "absolute",
    left: 0,
  },
  closeButton: {
    alignSelf: "flex-",
    marginTop: 20, 
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    color: "#000",
  },
  logoutButton: {
    marginTop: 460,
  },
  logoutText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
    
    
  },
});
