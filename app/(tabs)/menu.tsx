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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, View } from "../../components/Themed";
import React, { useCallback, useState } from "react";
import { Menu, Colors } from "../../constants";

export default function ChartScreen() {
    const colorScheme = useColorScheme();
    const [SwithcValue, setSwitchValue] = useState(false);

    const repoLink: string = "https://github.com/OlivierKobialka/stock-watch";

    const handleLinkPress = () => {
        Linking.openURL(repoLink);
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
                            name="user-circle-o"
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
                            <FontAwesome name="send-o" size={25} />

                            <Text style={Menu.text}>chats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Menu.smallBox}>
                            <FontAwesome name="cog" size={25} />
                            <Text style={Menu.text}>settings</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*  */}
                <View>
                    <View style={Menu.viewBox}>
                        <FontAwesome
                            name="moon-o"
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
                                onValueChange={() =>
                                    setSwitchValue(!SwithcValue)
                                }
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
                            name="share-square-o"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>Share TradingView</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={Menu.viewBox}>
                        <FontAwesome
                            name="comment-o"
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
                        <FontAwesome
                            name="at"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>We're on social media</Text>
                            <FontAwesome
                                name="angle-right"
                                color="#E5E5EA"
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Menu.viewBox}>
                        <FontAwesome
                            name="sticky-note-o"
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
                        <FontAwesome
                            name="info"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>About</Text>
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
                            name="question-circle-o"
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
                            name="sign-out"
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
                        <FontAwesome name="github" size={25} />
                        <View style={Menu.rectangle}>
                            <Text style={Menu.text}>Chek out Github repo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
