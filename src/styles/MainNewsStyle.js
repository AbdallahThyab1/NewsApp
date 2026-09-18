import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    backgroundImages: {
        marginHorizontal : 20,
        borderRadius : 10,
        overflow : "hidden",
        width : 300
    },
    subView: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding : 10,
        marginTop : 100,
        marginBottom : 20,
        marginHorizontal : 20,
        borderRadius : 10
    },
    subViewTitle: {
                backgroundColor: 'rgba(223, 41, 41, 0.7)',
                borderRadius : 7,
                alignItems : "flex-start",
                alignSelf : "flex-start",
                paddingHorizontal : 10,
                paddingVertical : 5
    },
    subViewTitleStyle : {
        color : "white",
        fontWeight : "bold",
        fontSize : 12,
    },
    subViewDescription: {

    }
});

export default styles;