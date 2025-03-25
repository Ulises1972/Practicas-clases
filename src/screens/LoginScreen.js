import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Función de manejo de login
  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      Alert.alert("Login successful!");
      // Simula un inicio de sesión exitoso y navega a la pantalla principal
      navigation.replace("Home");
    } else {
      Alert.alert("Login failed", "Incorrect username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      <View style={styles.registerContainer}>
        <Text>Don't have an account?</Text>
        <Button
          title="Register"
          onPress={() => Alert.alert("Registration screen coming soon!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  registerContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default LoginScreen;
