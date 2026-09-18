import { View, Text, TouchableOpacity } from 'react-native'
import Header from "../../components/Header.jsx"
import { SafeAreaView } from 'react-native-safe-area-context'
import MainNews from '../../components/MainNews.jsx'
import HomeScreenStyle from "../../styles/HomeScreenStyle.js"
import { useState } from 'react'

export default function HomeScreen() {
    let [textContent, SetTextContent] = useState("AD");
    function changeText() {
        SetTextContent("Abdallah Thyab");
    }
    return (
        <SafeAreaView>
            <View>
                <Header />
                <MainNews />
                <View style={HomeScreenStyle.MainTouchable}>
                    <Text style={HomeScreenStyle.MainTouchableText}>
                        {textContent}
                    </Text>
                    <TouchableOpacity style={HomeScreenStyle.MainTouchableButton} onPress={changeText}>
                        <Text style={HomeScreenStyle.MainTouchableButtonText}>
                            Click Me
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}