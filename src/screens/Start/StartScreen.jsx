import { Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function StartScreen() {

    const navigation = useNavigation();

    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.navigate("Home");
        }, 4000);

        return () => clearTimeout(timer);

    }, [navigation]);

    return (
        <Image
            source={require("../../assets/images/StartScreenImage.png")}
            style={{
                flex: 1,
                width: "100%",
            }}
            resizeMode="cover"
        />
    );
}