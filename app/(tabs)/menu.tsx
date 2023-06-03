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
import Colors from "../../constants/Colors";

export default function ChartScreen() {
    const colorScheme = useColorScheme();
    const [SwithcValue, setSwitchValue] = useState(false);

    const repoLink: string = "https://github.com/OlivierKobialka/stock-watch";

    const handleLinkPress = () => {
        Linking.openURL(repoLink);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
                {/*  */}
                <View style={styles.topInfo}>
                    <View style={styles.user}>
                        <FontAwesome
                            name="user-circle-o"
                            color={Colors[colorScheme ?? "light"].text}
                            size={45}
                            style={{
                                marginHorizontal: 15,
                            }}
                        />
                        <Text style={styles.text}>Olivier Kobiałka</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <TouchableOpacity style={styles.smallBox}>
                            <FontAwesome name="send-o" size={25} />

                            <Text style={styles.text}>chats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.smallBox}>
                            <FontAwesome name="cog" size={25} />
                            <Text style={styles.text}>settings</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*  */}
                <View>
                    <View style={styles.viewBox}>
                        <FontAwesome
                            name="moon-o"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={styles.rectangle}>
                            <Text style={styles.text}>Dark theme</Text>
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
                    <TouchableOpacity style={styles.viewBox}>
                        <FontAwesome
                            name="share-square-o"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={styles.rectangle}>
                            <Text style={styles.text}>Share TradingView</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewBox}>
                        <FontAwesome
                            name="comment-o"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={styles.rectangle}>
                            <Text style={styles.text}>Rate us</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 30,
                    }}
                >
                    <TouchableOpacity style={styles.viewBox}>
                        <FontAwesome
                            name="at"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={styles.rectangle}>
                            <Text style={styles.text}>
                                We're on social media
                            </Text>
                            <FontAwesome
                                name="angle-right"
                                color="#E5E5EA"
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewBox}>
                        <FontAwesome
                            name="sticky-note-o"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={styles.rectangle}>
                            <Text style={styles.text}>TV Stickers</Text>
                            <FontAwesome
                                name="angle-right"
                                color="#E5E5EA"
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewBox}>
                        <FontAwesome
                            name="info"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={styles.rectangle}>
                            <Text style={styles.text}>About</Text>
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
                    <TouchableOpacity style={styles.viewBox}>
                        <FontAwesome
                            name="question-circle-o"
                            color={Colors[colorScheme ?? "light"].text}
                            size={25}
                        />
                        <View style={styles.rectangle}>
                            <Text style={styles.text}>Help center</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 30,
                    }}
                >
                    <TouchableOpacity style={styles.viewBox}>
                        <FontAwesome
                            name="sign-out"
                            color="#FF3B30"
                            size={25}
                        />
                        <View style={styles.rectangle}>
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
                        style={styles.viewBox}
                        onPress={handleLinkPress}
                    >
                        <FontAwesome name="github" size={25} />
                        <View style={styles.rectangle}>
                            <Text style={styles.text}>
                                Chek out Github repo
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 20,
    },
    scrollView: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    viewBox: {
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
        borderBottomColor: "#E5E5EA",
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        textTransform: "capitalize",
    },
    topInfo: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: 30,
    },
    user: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#E5E5EA",
        borderRadius: 10,
        marginBottom: 10,
        height: 70,
    },
    boxContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    smallBox: {
        height: 70,
        width: "48%",
        backgroundColor: "#E5E5EA",
        borderRadius: 10,
        justifyContent: "space-around",
        alignItems: "flex-start",
        paddingLeft: 15,
        paddingVertical: 5,
    },
});
