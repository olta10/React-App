import React from "react";
import { StyleSheet, View, Text } from "react-native-web";

const QyshDush = ({ route }) => {
    const { username } = route.params || {};  // Ensure `route` is destructured
    return (
        <View style={styles.container}>  {/* Use `View` instead of `view` */}
            <Text style={styles.title}>
                Welcome{username ? `, ${username}` : ""}
            </Text>
            <Text>This is the third screen where ......</Text>
        </View>
    );
};

const styles = StyleSheet.create({  // Correct the spelling of `StyleSheet`
    container: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
    },
});

export default QyshDush;
