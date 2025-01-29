// Welcome.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Welcome = ({ route }) => {
    const { username } = route.params || {};
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome {username ? `, ${username}` : ""}
            </Text>
            <Text>This is the second screen where we show a personalized greeting.</Text>
            <Button></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Welcome;
