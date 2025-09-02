import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const VerMais = ({ navigation }) => {  
return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
 
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/Menu.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      
        <TouchableOpacity>
          <Image
            source={require("../assets/images/User.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
           
      </View>
         <View style={styles.content}>
                <Text style={styles.title}>Participe!!</Text>
                <Text style={styles.titleDois}>
                  Toda ação tem {"\n"}um proposito.
                </Text>
                  <View style={styles.botoes}>
                          <TouchableOpacity
                            style={styles.botaoAgenda}
                            onPress={() => console.log("Minha agenda clicada")}
                          >
                            <Text style={styles.textoAgenda}>Minha agenda</Text>
                          </TouchableOpacity>
                        </View>
                        </View>
       <View style={styles.linha} />

     
        
       </ScrollView>
       

        );
};

       export default VerMais;


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

   linha: {
    marginTop: 15, 
    marginHorizontal: 20,
    height: 1,
    backgroundColor: "#b9b8b8ff",
  },

    content: {
    paddingBottom: 10, 
  },
  title: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 21,
    fontFamily: "NunitoSans-Light",
  },
  titleDois: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 21,
    fontFamily: "Raleway-Bold",
  },
   botaoAgenda: {
    backgroundColor: "#B20000",
    width: 118,
    height: 36,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 20,
  },
  textoAgenda: {
    fontSize: 14,
    color: "white",
    
    
  },


});


