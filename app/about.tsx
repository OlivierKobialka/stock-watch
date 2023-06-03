import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import React from "react";
import { Link } from "expo-router";
import { about } from "../constants";

export default function SocialMedia() {
    const items = [
        { name: "House rules" },
        { name: "Privacy policy" },
        { name: "Terms of use" },
        { name: "Cookie policy" },
        { name: "Third party sounds" },
    ];

    return (
        <View style={about.container}>
            <Text style={about.title}>About</Text>
            <Text style={about.version}>Version 2.64.0 build 742</Text>
            <View style={about.list}>
                {items.map((item) => (
                    <View style={about.box} key={item.name}>
                        <Text style={about.text}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
