import {
    Button,
    Linking,
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    TouchableOpacity,
    useColorScheme,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { Text, View } from "../../components/Themed";
import React, { useCallback, useState } from "react";
import { Menu, Colors } from "../../constants";
import { Link } from "expo-router";
// import Themed from "../../components/Themed";

export default function ChartScreen() {
    const colorScheme = useColorScheme();
    const [SwithcValue, setSwitchValue] = useState(false);

    const handleColorSchemeChange = useCallback(() => {
        setSwitchValue(!SwithcValue);
        // const newColorScheme = SwithcValue ? "dark" : "light";
        // // Use the newColorScheme directly to update the color scheme
        // // You might have a separate method to handle this update, let's assume it's called updateColorScheme
        // updateColorScheme(newColorScheme);
    }, [SwithcValue]);

    const handleLinkPress = () => {
        const repoLink: string =
            "https://github.com/OlivierKobialka/stock-watch";
        Linking.openURL(repoLink);
    };
    const handleOnSocialMediaPress = () => {
        const socialMediaLink: string = "../modal";
        Linking.openURL(socialMediaLink);
    };

    return (
        <View style={Menu.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={Menu.scrollView}
            >
                {/*  */}
                <View style={Menu.topInfo}>
                    <View
                        lightColor="#edf2f7"
                        darkColor="#3634A3"
                        style={Menu.user}
                    >
                        <FontAwesome
                            name="user-circle"
                            color={Colors[colorScheme ?? "light"].text}
                            size={45}
                            style={{
                                marginHorizontal: 15,
                            }}
                        />
                        <Text style={Menu.text}>Olivier Kobiałka</Text>
                    </View>
                    <View style={Menu.boxContainer}>
                        <TouchableOpacity style={Menu.smallBox}>
                            <FontAwesome
                                color={Colors[colorScheme ?? "light"].text}
                                name="comments"
                                size={25}
                            />

                            <Text style={Menu.text}>chats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Menu.smallBox}>
                            <Link href="../settings">
                                <FontAwesome
                                    color={Colors[colorScheme ?? "light"].text}
                                    name="cog"
                                    size={25}
                                />
                            </Link>
                            <Link href="../settings">
                                <Text style={Menu.text}>settings</Text>
                            </Link>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*  */}
                <View>
                    <View style={Menu.viewBox}>
                        <FontAwesome
                            name="moon"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>Dark theme</Text>
                            <Switch
                                style={{
                                    transform: [
                                        { scaleX: 0.9 },
                                        { scaleY: 0.9 },
                                    ],
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
                    <TouchableOpacity style={Menu.viewBox}>
                        <FontAwesome
                            name="share-square"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>Share TradingView</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={Menu.viewBox}>
                        <FontAwesome
                            name="star"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>Rate us</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 30,
                    }}
                >
                    <TouchableOpacity style={Menu.viewBox}>
                        <Link href="../modal">
                            <FontAwesome
                                name="at"
                                color={Colors[colorScheme ?? "light"].text}
                                size={25}
                            />
                        </Link>
                        <View style={Menu.rectangle}>
                            <Link href="../socials">
                                <Text style={Menu.text}>
                                    We're on social media
                                </Text>
                            </Link>

                            <FontAwesome
                                name="angle-right"
                                color="#E5E5EA"
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Menu.viewBox}>
                        <FontAwesome
                            name="sticky-note"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>TV Stickers</Text>
                            <FontAwesome
                                name="angle-right"
                                color="#E5E5EA"
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Menu.viewBox}>
                        <Link href="../about">
                            <FontAwesome
                                name="info"
                                color={Colors[colorScheme ?? "light"].text}
                                size={25}
                            />
                        </Link>
                        <View style={Menu.rectangle}>
                            <Link href="../about">
                                <Text style={Menu.text}>About</Text>
                            </Link>
                            <FontAwesome
                                name="angle-right"
                                color="#E5E5EA"
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 30,
                    }}
                >
                    <TouchableOpacity style={Menu.viewBox}>
                        <FontAwesome
                            name="question-circle"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>Help center</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 30,
                    }}
                >
                    <TouchableOpacity style={Menu.viewBox}>
                        <FontAwesome
                            name="sign-out-alt"
                            color="#FF3B30"
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text
                                style={{
                                    color: "#FF3B30",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                }}
                            >
                                Sign out
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 30,
                    }}
                >
                    <TouchableOpacity
                        style={Menu.viewBox}
                        onPress={handleLinkPress}
                    >
                        <FontAwesome
                            color={Colors[colorScheme ?? "light"].text}
                            name="github"
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>Chek out Github repo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
