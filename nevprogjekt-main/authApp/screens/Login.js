import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native-web";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        credentials: "omit",
      });
      const data = await response.json();
      if (data?.accessToken) {
        navigation.navigate("Welcome", { 
          username: username 
        });
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while logging in");
    }
  };

  return (
    <View>
      <Text>Welcome to Arlind Selimi bo diqka</Text>
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
