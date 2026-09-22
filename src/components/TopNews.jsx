import {
    View,
    Text,
    Image,
    FlatList,
    Pressable,
} from "react-native";

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import TopNewsStyle from "../styles/TopNewsStyle.js";

export default function TopNews() {

    const navigation = useNavigation();

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getTopNews();
    }, []);

    async function getTopNews() {

        try {

            const apiKey = "784c886c1af24e2d866b0e25a615f0fc";

            const sourcesResponse = await axios.get(
                "https://newsapi.org/v2/top-headlines/sources",
                {
                    params: {
                        country: "sa",
                        language: "ar",
                        category: "business",
                    },
                    headers: {
                        "X-Api-Key": apiKey,
                    },
                }
            );

            const sourceIds = sourcesResponse.data?.sources
                ?.map((source) => source.id)
                ?.filter(Boolean)
                ?.join(",");

            if (!sourceIds) {
                console.log("No Arabic business sources found.");
                return;
            }

            const response = await axios.get(
                "https://newsapi.org/v2/top-headlines",
                {
                    params: {
                        sources: sourceIds,
                        pageSize: 20,
                    },
                    headers: {
                        "X-Api-Key": apiKey,
                    },
                }
            );

            const articlesWithImages =
                response.data?.articles?.filter(
                    (article) => article?.urlToImage
                ) || [];

            setArticles(articlesWithImages);

        } catch (error) {

            console.log(
                "NEWS API ERROR:",
                error.response?.data || error.message
            );

        }
    }

    function renderItem({ item }) {

        return (
            <Pressable
                onPress={() => {
                    navigation.navigate("NewsDetails", {
                        article: item,
                    });
                }}
            >

                <View style={TopNewsStyle.cardContainer}>

                    <Image
                        style={TopNewsStyle.cardArticelImage}
                        source={{
                            uri: item.urlToImage,
                        }}
                    />

                    <Text style={TopNewsStyle.cardArticelName}>
                        {item.title}
                    </Text>

                </View>

            </Pressable>
        );
    }

    return (
        <View style={TopNewsStyle.container}>

            <Text style={TopNewsStyle.sectionTitle}>
                Top News
            </Text>

            <FlatList
                data={articles}
                renderItem={renderItem}
                keyExtractor={(item, index) =>
                    item.url || index.toString()
                }
                contentContainerStyle={
                    TopNewsStyle.listContainer
                }
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
            />

        </View>
    );
}