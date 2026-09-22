import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    Header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: 18,
        paddingVertical: 10,

        backgroundColor: "#FFFFFF",

        borderBottomWidth: 1,
        borderBottomColor: "#EEF1F4",

        elevation: 2,
    },

    PersonImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },

    NotificationImage: {
        width: 30,
        height: 30,
    },

    Title: {
        color: "#0B1F33",
        fontSize: 21,
        fontWeight: "800",
        textAlign: "center",
    },

});

export default styles;