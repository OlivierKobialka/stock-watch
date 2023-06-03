import { Pressable, ScrollView, StyleSheet, Switch } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import React from "react";

export default function ChartScreen() {
    const [SwithcValue, setSwitchValue] = React.useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            <ScrollView>
                <View>
                    <View>
                        <Text>username</Text>
                    </View>
                    <View>
                        <View>
                            <Text>chats</Text>
                        </View>
                        <View>
                            <Text>settings</Text>
                        </View>
                    </View>
                </View>
                {/*  */}
                <View>
                    <View>
                        <Text>Dark theme</Text>
                        <Switch
                            value={SwithcValue}
                            onValueChange={() => setSwitchValue(!SwithcValue)}
                            ios_backgroundColor={"#F2F2F7"}
                            trackColor={{ false: "#F2F2F7", true: "#007AFF" }}
                            thumbColor={"#f4f3f4"}
                            disabled={false}
                        />
                    </View>
                    <Pressable>
                        <Text>Share TradingView</Text>
                    </Pressable>
                    <Pressable>
                        <Text>Rate us</Text>
                    </Pressable>
                </View>
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
                <View>
                    <Pressable>
                        <Text>We're on scial media</Text>
                    </Pressable>
                    <Pressable>
                        <Text>TV Stickers</Text>
                    </Pressable>
                    <Pressable>
                        <Text>About</Text>
                    </Pressable>
                </View>
                {/* divider */}
                <View>
                    <Pressable>
                        <Text>Sign out</Text>
                    </Pressable>
                </View>
                {/* divisder */}
                <View>
                    <Pressable>
                        <Text>Sign out</Text>
                    </Pressable>
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
});
