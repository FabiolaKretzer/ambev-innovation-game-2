import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#8257e5",
    },

    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontFamily: "Archivo_700Bold",
        color: "#fff",
        fontSize: 18,
        lineHeight: 32,
        maxWidth: 170,
        marginVertical: 20,
    },
});

export default styles;