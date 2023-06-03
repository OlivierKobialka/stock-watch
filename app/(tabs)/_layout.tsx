import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import React from "react";

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    const tabs = [
        {
            name: "chart",
            title: "Chart",
            icon: "bar-chart",
        },
        {
            name: "news",
            title: "News",
            icon: "newspaper-o",
        },
        {
            name: "menu",
            title: "Menu",
            icon: "user",
        },
    ];

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Watchlist",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="star" color={color} />
                    ),
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info"
                                        size={25}
                                        color={
                                            Colors[colorScheme ?? "light"].text
                                        }
                                        style={{
                                            marginRight: 15,
                                            opacity: pressed ? 0.5 : 1,
                                        }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name={tab.icon} color={color} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
}
