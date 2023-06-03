import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { Text, View } from "../components/Themed";
import React from "react";
import { Link } from "expo-router";
import { weOnSocals, Colors } from "../constants";
import { useColorScheme } from "react-native";

export default function SocialMedia() {
    const colorScheme = useColorScheme();
    const socials = [
        {
            name: "Twitter",
            url: "https://twitter.com/Expo",
            icon: "twitter",
        },
        {
            name: "TradingView",
            url: "https://www.tradingview.com/u/Expo/",
            icon: "ethereum",
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
            icon: "tiktok",
        },
        {
            name: "Discord",
            url: "https://discord.gg/4gtbB6P",
            icon: "discord",
        },
    ];

    return (
        <View style={weOnSocals.container}>
            <Text style={weOnSocals.title}>We're on socials...</Text>
            {socials.map((social) => (
                <View style={weOnSocals.box} key={social.name}>
                    <Link href={social.url} target="_blank">
                        <FontAwesome name={social.icon} size={24} />
                    </Link>

                    <View style={weOnSocals.rectangle}>
                        <Link href={social.url} target="_blank">
                            <Text>{social.name}</Text>
                        </Link>
                        <Link href={social.url} target="_blank">
                            <FontAwesome
                                name="angle-right"
                                color={Colors[colorScheme ?? "light"].text}
                                size={20}
                            />
                        </Link>
                    </View>
                </View>
            ))}
        </View>
    );
}
