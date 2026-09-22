import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
    },

    content: {
        paddingBottom: 30,
    },

    image: {
        width: "100%",
        height: 280,
    },

    article: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: 16,
        marginTop: -15,
        padding: 20,
        borderRadius: 16,
        elevation: 3,
    },

    source: {
        color: "#C62828",
        fontSize: 14,
        fontWeight: "700",
        textAlign: "right",
        marginBottom: 10,
    },

    title: {
        color: "#0B1F33",
        fontSize: 25,
        fontWeight: "800",
        lineHeight: 35,
        textAlign: "right",
        marginBottom: 16,
    },

    description: {
        color: "#4F5B66",
        fontSize: 17,
        lineHeight: 29,
        textAlign: "right",
        marginBottom: 25,
    },

    button: {
        backgroundColor: "#0B1F33",
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: "center",
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },

});

export default styles;