import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    backgroundImages: {
        width: 330,
        height: 220,

        marginHorizontal: 8,

        borderRadius: 18,
        overflow: "hidden",

        justifyContent: "flex-end",
    },

    subView: {
        backgroundColor: "rgba(11, 31, 51, 0.88)",

        paddingHorizontal: 15,
        paddingVertical: 14,

        marginHorizontal: 10,
        marginBottom: 10,

        borderRadius: 14,
    },

    subViewTitle: {
        backgroundColor: "#C62828",

        alignSelf: "flex-start",

        paddingHorizontal: 10,
        paddingVertical: 5,

        borderRadius: 6,

        marginBottom: 9,
    },

    subViewTitleStyle: {
        color: "#FFFFFF",

        fontSize: 10,
        fontWeight: "700",

        letterSpacing: 0.3,
    },

    subViewDescription: {
        color: "#FFFFFF",

        fontSize: 16,
        fontWeight: "700",

        lineHeight: 23,

        textAlign: "right",
    },

    mainList: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

});

export default styles;