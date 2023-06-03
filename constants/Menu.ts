const userBgColor = "#edf2f7";
const borderColor = "#F2F2F7";

export default {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 10,
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
        borderBottomColor: borderColor,
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
        backgroundColor: userBgColor,
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
        backgroundColor: userBgColor,
        borderRadius: 10,
        justifyContent: "space-around",
        alignItems: "flex-start",
        paddingLeft: 15,
        paddingVertical: 5,
    },
};
