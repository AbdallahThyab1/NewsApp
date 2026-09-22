import { ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header.jsx";
import MainNews from "../../components/MainNews.jsx";
import TopNews from "../../components/TopNews.jsx";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 30,
                }}
            >

                <Header />

                <MainNews />

                <TopNews />

            </ScrollView>

        </SafeAreaView>
    );
}