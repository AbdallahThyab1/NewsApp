import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        marginTop: 22,
        paddingHorizontal: 16,
        paddingBottom: 10,
    },

    sectionTitle: {
        color: "#0B1F33",
        fontSize: 22,
        fontWeight: "800",
        textAlign: "right",
        marginBottom: 14,
    },

    listContainer: {
        paddingBottom: 20,
    },

    cardContainer: {
        backgroundColor: "#FFFFFF",

        borderRadius: 16,
        overflow: "hidden",

        marginBottom: 14,

        elevation: 3,
    },

    cardArticelImage: {
        width: "100%",
        height: 175,
    },

    cardArticelName: {
        color: "#0B1F33",

        fontSize: 16,
        fontWeight: "700",

        lineHeight: 24,

        textAlign: "right",

        paddingHorizontal: 15,
        paddingVertical: 14,
    },

});

export default styles;