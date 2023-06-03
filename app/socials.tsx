import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import React from "react";
import { Link } from "expo-router";

export default function SocialMedia() {
    const socials = [
        {
            name: "Twitter",
            url: "https://twitter.com/Expo",
            icon: "twitter",
        },
        {
            name: "TradingView",
            url: "https://www.tradingview.com/u/Expo/",
            icon: "telegram",
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/channel/UC0DZmkupLYwc0yDsfocLh0A",
            icon: "youtube",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/expo.io/",
            icon: "instagram",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/expo.io",
            icon: "facebook",
        },
        {
            name: "Telegram",
            url: "https://t.me/expo",
            icon: "telegram",
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com/@expo",
            icon: "telegram",
        },
        {
            name: "Discord",
            url: "https://discord.gg/4gtbB6P",
            icon: "telegram",
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>We are on socials...</Text>
            {socials.map((social) => (
                <View style={styles.box} key={social.name}>
                    <Link
                        style={{ width: "100%" }}
                        href={social.url}
                        target="_blank"
                    >
                        <FontAwesome name={social.icon} size={24} />
                        <View style={styles.rectangle}>
                            <Text>{social.name}</Text>

                            <FontAwesome
                                name="angle-right"
                                color="#E5E5EA"
                                size={20}
                            />
                        </View>
                    </Link>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    box: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
    },
    rectangle: {
        display: "flex",
        flexDirection: "row",
        width: "87%",
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#F2F2F7",
        borderBottomWidth: 1,
    },
});
