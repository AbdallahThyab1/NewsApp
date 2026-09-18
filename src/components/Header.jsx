import { Image, StyleSheet, View, Text } from 'react-native'
import HeaderStyle from "../styles/HeaderStyle.js"
export default function Header() {
    return (
        <View style={HeaderStyle.Header}>
            <Image
                style={HeaderStyle.PersonImage}
                source={require("../assets/images/profile.png")}
            />

            <Text style={HeaderStyle.Title}>NewsApp</Text>

            <Image
                style={HeaderStyle.NotificationImage}
                source={require("../assets/images/notification.png")}
            />
        </View>
        
    )
}

