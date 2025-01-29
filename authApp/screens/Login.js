// Login.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                credentials: "omit"
            });
            const data = await response.json();
            console.log(data)
            if (data?.accessToken) {
                navigation.navigate("Welcome", { username });
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Welcome to the fake API call</Text>
            <TextInput
                placeholder="Username"
                autoCapitalize="none"
                value={username}
                onChangeText={text => setUsername(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                autoCapitalize="none"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    }
});

export default Login;
