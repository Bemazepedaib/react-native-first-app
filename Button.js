import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

export default function Button() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginTop: 15,
    },
	button: {
        width: '60%',
		height: 50,
        borderRadius: 30,
        padding: 'auto',
        marginTop: 60,
		backgroundColor: '#fff'
    }
});