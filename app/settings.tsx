import { ScrollView, Switch, useColorScheme } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

import { Text, View } from "../components/Themed";
import React, { useCallback, useState } from "react";
import { settings, Colors } from "../constants";

export default function SocialMedia() {
    const colorScheme = useColorScheme();
    const [SwithcValue, setSwitchValue] = useState(true);

    const handleColorSchemeChange = useCallback(() => {
        setSwitchValue(!SwithcValue);
        // const newColorScheme = SwithcValue ? "dark" : "light";
        // // Use the newColorScheme directly to update the color scheme
        // // You might have a separate method to handle this update, let's assume it's called updateColorScheme
        // updateColorScheme(newColorScheme);
    }, [SwithcValue]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={settings.container}
        >
            <Text style={settings.title}>Settings</Text>
            <View style={settings.box}>
                <FontAwesome
                    color={Colors[colorScheme ?? "light"].text}
                    name="hand-holding-usd"
                    size={24}
                />
                <View style={settings.rectangle}>
                    <Text style={settings.text}>Restore purchase</Text>
                </View>
            </View>
            <Text style={settings.subtext}>
                You can try subscription in case something went wrong after a
                purchase
            </Text>
            <View style={settings.list}>
                <View style={settings.box}>
                    <FontAwesome
                        color={Colors[colorScheme ?? "light"].text}
                        name="star"
                        size={24}
                    />
                    <View style={settings.rectangle}>
                        <Text style={settings.text}>Watchlist</Text>
                        <FontAwesome
                            name="angle-right"
                            color="#E5E5EA"
                            size={20}
                        />
                    </View>
                </View>
                <View style={settings.box}>
                    <FontAwesome
                        color={Colors[colorScheme ?? "light"].text}
                        name="signal"
                        size={24}
                    />
                    <View style={settings.rectangle}>
                        <Text style={settings.text}>Chart</Text>
                        <FontAwesome
                            name="angle-right"
                            color="#E5E5EA"
                            size={20}
                        />
                    </View>
                </View>
            </View>
            <View style={settings.list}>
                <View style={settings.box}>
                    <FontAwesome
                        color={Colors[colorScheme ?? "light"].text}
                        name="volume-up"
                        size={24}
                    />
                    <View style={settings.rectangle}>
                        <Text style={settings.text}>Alert sounds</Text>
                        <FontAwesome
                            name="angle-right"
                            color="#E5E5EA"
                            size={20}
                        />
                    </View>
                </View>
                <View style={settings.box}>
                    <FontAwesome
                        color={Colors[colorScheme ?? "light"].text}
                        name="lock"
                        size={24}
                    />
                    <View style={settings.rectangle}>
                        <Text style={settings.text}>Screen auto-lock</Text>
                        <Switch
                            style={{
                                transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
                            }}
                            value={SwithcValue}
                            onValueChange={handleColorSchemeChange}
                            ios_backgroundColor={"#F2F2F7"}
                            trackColor={{
                                false: "#F2F2F7",
                                true: "#007AFF",
                            }}
                            thumbColor={"#f4f3f4"}
                            disabled={false}
                        />
                    </View>
                </View>
                <View style={settings.box}>
                    <FontAwesome
                        color={Colors[colorScheme ?? "light"].text}
                        name="globe"
                        size={24}
                    />
                    <View style={settings.rectangle}>
                        <Text style={settings.text}>Language</Text>
                        <FontAwesome
                            name="angle-right"
                            color="#E5E5EA"
                            size={20}
                        />
                    </View>
                </View>
            </View>
            <View style={settings.list}>
                <View style={settings.box}>
                    <FontAwesome
                        color={Colors[colorScheme ?? "light"].text}
                        name="trash"
                        size={24}
                    />
                    <View style={settings.rectangle}>
                        <Text style={settings.text}>Charts ignore list</Text>
                        <FontAwesome
                            name="angle-right"
                            color="#E5E5EA"
                            size={20}
                        />
                    </View>
                </View>
            </View>
            <View style={settings.listLast}>
                <View style={settings.box}>
                    <FontAwesome color="#FF3B30" name="fire" size={24} />
                    <View style={settings.rectangleD}>
                        <Text style={settings.textD}>Delete account</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
