import { Pressable, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function MenuScreen() {
	return (
		<View style={styles.container}>
			<ScrollView>
				<Text>Menu</Text>
				<View style={styles.mainBox}>
					<View>
						<Pressable style={styles.box}>
							<Text>123</Text>
						</Pressable>
					</View>
					<View style={styles.secondBox}>
						<Pressable style={styles.box}>
							<Text>123</Text>
						</Pressable>
						<Pressable style={styles.box}>
							<Text>123</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		padding: 15,
	},
	mainBox: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	secondBox: {
		display: "flex",
		flexDirection: "row",
		width: "full",
	},
	box: {
		backgroundColor: "#fde",
		width: "full",
		borderRadius: 15,
	},
});
