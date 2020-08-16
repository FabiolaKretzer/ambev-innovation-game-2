import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#e6e6f0",
        borderRadius: 8,
        marginBottom: 16,
        overflow: "hidden",
    },

    profile: {
        flexDirection: "row",
        alignItems: "center",
        padding: 24,
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#eee",
    },

    profileInfo: {
        marginLeft: 16,
    },
    
    name: {
        fontFamily: "Archivo_700Bold",
        color: "#32264d",
        fontSize: 20,
    },

    footer: {
        backgroundColor: "#fafafc",
        padding: 24,
        alignItems: "center",
    },

    price: {
        fontFamily: "Archivo_400Regular",
        color: "#6a6180",
        fontSize: 14,
    },

    priceValue: {
        fontFamily: "Archivo_700Bold",
        color: "#8257e5",
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: "row",
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        
    },

    contactButton: {
        flex: 1,
        height: 50,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
        marginLeft: 5,
    },

    contactButtonText: {
        color: "#fff",
        fontFamily: "Archivo_700Bold",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
    },
});

export default styles;