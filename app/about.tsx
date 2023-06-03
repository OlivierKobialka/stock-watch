import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import React from "react";
import { Link } from "expo-router";
import { weOnSocals } from "../constants";

export default function SocialMedia() {
    return <View style={s.container}>
        <Text style={s.title}>About</Text>
    </View>;
}

const s = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
});
