import {
    View,
    Text,
    Image,
    ScrollView,
    Pressable,
    Linking,
} from "react-native";

import React from "react";

import NewsDetailsStyles from "../../styles/NewsDetailsStyle.js";

export default function NewsDetailsScreen({ route }) {

    const { article } = route.params;

    function openArticle() {
        Linking.openURL(article.url);
    }

    return (
        <View style={NewsDetailsStyles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={NewsDetailsStyles.content}
            >

                <Image
                    source={{
                        uri: article.urlToImage,
                    }}
                    style={NewsDetailsStyles.image}
                />

                <View style={NewsDetailsStyles.article}>

                    <Text style={NewsDetailsStyles.source}>
                        {article.source?.name}
                    </Text>

                    <Text style={NewsDetailsStyles.title}>
                        {article.title}
                    </Text>

                    <Text style={NewsDetailsStyles.description}>
                        {article.description}
                    </Text>

                    <Pressable
                        style={NewsDetailsStyles.button}
                        onPress={openArticle}
                    >
                        <Text style={NewsDetailsStyles.buttonText}>
                            قراءة الخبر كاملًا
                        </Text>
                    </Pressable>

                </View>

            </ScrollView>

        </View>
    );
}