import React from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ImageBackground 
} from "react-native";

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* TOPO COM ÍCONES */}
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
        <Text style={styles.title}>Bem vindo(a)!!</Text>
        <Text style={styles.titleDois}>
          Sua dedicação transforma vidas {"\n"}todos os dias.
        </Text>

        {/* BOTÕES */}
        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botaoSaiba}
            onPress={() => console.log("Saiba Mais clicado")}
          >
            <Text style={styles.textoSaiba}>Saiba Mais</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoAgenda}
            onPress={() => console.log("Minha agenda clicada")}
          >
            <Text style={styles.textoAgenda}>Minha agenda</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha} />
      </View>

    
      <View style={styles.eventosContainer}>
        <Text style={styles.evca}>Eventos e campanhas</Text>

        {/* CARDS COM IMAGENS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <ImageBackground
            source={require("../assets/images/sopa.png")}
            style={styles.card}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardText}>Entrega de sopas</Text>
            </View>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/images/coleta.png")}
            style={styles.card}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardText}>Coleta recicláveis</Text>
            </View>
          </ImageBackground>

          <ImageBackground
            source={require("../assets/images/sopa.png")}
            style={styles.card}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardText}>Entrega de sopas</Text>
            </View>
          </ImageBackground>
        </ScrollView>

       
        <TouchableOpacity 
          style={styles.botaoVerMais} 
          onPress={() => console.log("ok")}
        >
          <Text style={styles.textoVermais}>Ver mais...</Text>
        </TouchableOpacity>
        <View style={styles.eventosContainer}>
        <Text style={styles.evca}>Faça uma doação </Text>
         <View style={styles.doacoes}>
             <Image
                    source={require('../assets/images/Component 24.png')}
                    style={styles.foto1}
                    resizeMode="contain"
                  />
          <Image
                    source={require('../assets/images/Component 25.png')}
                    style={styles.foto}
                    resizeMode="contain"
                  />
         </View>
        </View>
      </View>
    </ScrollView>
    
  );
};

export default Home;

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
  botoes: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  botaoSaiba: {
    backgroundColor: "#B20000",
    width: 118,
    height: 36,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textoSaiba: {
    fontSize: 14,
    color: "white",
  },
  botaoAgenda: {
    backgroundColor: "#fff",
    width: 118,
    height: 36,
    marginLeft: 17,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#b20000",
  },
  textoAgenda: {
    fontSize: 14,
    color: "#b20000",
  },
  linha: {
    marginTop: 20, 
    marginHorizontal: 20,
    height: 1,
    backgroundColor: "#b9b8b8ff",
  },
  eventosContainer: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  evca: {
    marginLeft: 11,
    fontFamily: "NunitoSans-Light",
    fontSize: 20,
    marginBottom: 17,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 180,
    height: 200,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    alignItems: "center",
  },
  cardText: {
    color: "#fff",
    fontSize: 17,
     fontFamily: "NunitoSans-Light",
  },
  botaoVerMais: {
    marginTop: 15,
    alignSelf: "flex-end",
    marginRight: 15,
  },
  textoVermais: {
    fontSize: 15,
    color: "#b20000",
    fontFamily: "NunitoSans-Light",
    textDecorationLine: "underline",
  },

  doacoes:{
    justifyContent: "center",
    alignItems: "center",
  },

  foto:{
    marginTop: 20,
  }
});
