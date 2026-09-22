import {
    View,
    Text,
    ImageBackground,
    FlatList,
    Pressable,
} from "react-native";

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import MainNewsStyles from "../styles/MainNewsStyle.js";

export default function MainNews() {

    const navigation = useNavigation();

    const [topNews, setTopNews] = useState([]);

    useEffect(() => {
        getTopNews();
    }, []);

    async function getTopNews() {

        try {

            const url = "https://newsapi.org/v2/everything";
            const apiKey = "784c886c1af24e2d866b0e25a615f0fc";

            const response = await axios.get(url, {

                params: {
                    q: 'اقتصاد OR عملات OR دولار OR ذهب OR نفط OR أسواق OR بورصة OR بنوك OR "الشرق الأوسط"',
                    language: "ar",
                    sortBy: "publishedAt",
                    pageSize: 20,
                },

                headers: {
                    "X-Api-Key": apiKey,
                },

            });

            const articlesWithImages =
                response.data?.articles?.filter(
                    (article) => article?.urlToImage
                ) || [];

            setTopNews(articlesWithImages);

        } catch (error) {

            console.log(
                "MAIN NEWS API ERROR:",
                error.response?.data || error.message
            );

        }
    }

    function renderNews({ item }) {

        return (
            <Pressable
                onPress={() => {
                    navigation.navigate("NewsDetails", {
                        article: item,
                    });
                }}
            >

                <ImageBackground
                    source={{
                        uri: item.urlToImage,
                    }}
                    resizeMode="cover"
                    style={MainNewsStyles.backgroundImages}
                >

                    <View style={MainNewsStyles.subView}>

                        <View style={MainNewsStyles.subViewTitle}>

                            <Text
                                style={
                                    MainNewsStyles.subViewTitleStyle
                                }
                            >
                                {item.source?.name}
                            </Text>

                        </View>

                        <Text
                            style={MainNewsStyles.subViewDescription}
                        >
                            {item.title}
                        </Text>

                    </View>

                </ImageBackground>

            </Pressable>
        );
    }

    return (
        <View>

            <FlatList
                data={topNews}
                renderItem={renderNews}
                keyExtractor={(item, index) =>
                    item.url || index.toString()
                }
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={
                    MainNewsStyles.mainList
                }
            />

        </View>
    );
}