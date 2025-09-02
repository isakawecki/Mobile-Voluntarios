import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const DoacaoDinheiro = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
     <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/Menu.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
         <View style= {styles.headerMeio}>
           <Image
              source={require("../assets/images/logoOng.png")}
              style={styles.logo}
            />
            <Text style = { styles.titulo}>Voluntários Pro Bem</Text>
         </View>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/User.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
             
        </View>
      <View style={styles.linha} />
    </ScrollView>
  );
};

export default DoacaoDinheiro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    height: 100,
  },
  icon: {
    width: 30,
    height: 30,
  },
   headerMeio:{
     flexDirection: "row",
    justifyContent: "space-between",
     alignItems: "center",
 },

 titulo:{
    fontSize: 20,

 },

 logo:{
    width: 46,
    height: 53
 },

  linha: {
    marginTop: 15,
    marginHorizontal: 20,
    height: 1,
    backgroundColor: "#b9b8b8ff",
  },
});
