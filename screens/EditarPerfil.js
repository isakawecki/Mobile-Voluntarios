import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Alert
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditarPerfil = ({ navigation }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const dados = await AsyncStorage.getItem("usuario");
                if (dados) {
                    const usuario = JSON.parse(dados);
                    setNome(usuario.nome || "");
                    setEmail(usuario.email || "");
                    setTelefone(usuario.telefone || "");
                }
            } catch (error) {
                console.log("Erro ao carregar dados:", error);
            }
        };
        carregarDados();
    }, []);

    const salvarAlteracoes = async () => {
        try {
            const novoUsuario = { nome, email, telefone };
            await AsyncStorage.setItem("usuario", JSON.stringify(novoUsuario));
            Alert.alert("Sucesso!", "Alterações salvas.");
            navigation.goBack();
        } catch (error) {
            console.log("Erro ao salvar alterações:", error);
        }
    };

    const excluirConta = async () => {
        Alert.alert(
            "Confirmar exclusão",
            "Deseja realmente excluir sua conta?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: async () => {
                        await AsyncStorage.removeItem("usuario");
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Login" }],
                        });
                    },
                },
            ]
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ fontSize: 29 }}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Editar Perfil</Text>
            </View>

            <View style={styles.separator} />

          
            <Image
                source={require("../assets/images/editar.png")}
                style={styles.fotoApp}
                resizeMode="cover"
            />

            {/* Formulário */}
            <View style={styles.form}>
                {/* Nome */}
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    value={nome}
                    onChangeText={setNome}
                />
                <View style={styles.underline} />

                {/* Email */}
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <View style={styles.underline} />

                {/* Telefone */}
                <Text style={styles.label}>Telefone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                    keyboardType="phone-pad"
                />
                <View style={styles.underline} />

                <View style={{ alignItems: "center" }}>
                {/* Botão salvar alterações */}
                <TouchableOpacity style={styles.botaoSalvar} onPress={salvarAlteracoes}>
                    <Text style={styles.textoBotao}>Salvar Alterações</Text>
                </TouchableOpacity>

                {/* Botão excluir conta */}
                <TouchableOpacity style={styles.botaoExcluir} onPress={excluirConta}>
                    <Text style={styles.textoExcluir}>Excluir Conta</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    );
};

export default EditarPerfil;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: "#fff",
        flexGrow: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: 10,
    },
    backButton: {
        position: "absolute",
        left: 0,
        size: 28,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000ff",
        fontFamily: "Raleway-Bold",
    },
    separator: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 20,
    },
    fotoApp: {
        width: "100%",
        height: 160,
        borderRadius: 0,
        marginBottom: 20,
    },
    form: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
        fontFamily: "NunitoSans-Light",
    },
    input: {
        fontSize: 16,
        paddingVertical: 6,
        color: "#000",
    },
    underline: {
        height: 1,
        backgroundColor: "#ccc",
        marginBottom: 15,
    },
    botaoSalvar: {
        borderWidth: 1,
        borderColor: "#b20000",
        paddingVertical: 5,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        width: 170,
       
    },
    textoBotao: {
        color: "#b20000",
        fontSize: 15,
        fontWeight: "bold",
    },
    botaoExcluir: {
        marginTop: 200,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
       
    },
    textoExcluir: {
        color: "#b20000",
        fontSize: 16,
        fontWeight: "bold",
    },
});
