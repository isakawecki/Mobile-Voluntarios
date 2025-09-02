const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuItemPress = (item) => {
    console.log(`${item} clicado`);
   
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setMenuOpen(true)}>
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
        {/* ... seu conteúdo existente ... */}
      </ScrollView>
      <MenuToggle 
        visible={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        onItemPress={handleMenuItemPress} 
      />
    </View>
  );
};
export default Home;