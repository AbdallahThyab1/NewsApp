import { View, Text, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import MainNewsStyles from "../styles/MainNewsStyle.js";
import { useState } from "react";
const news = [
    {
        id: 1,
        title: "News Title 1.",
        Image: "https://media.istockphoto.com/id/464311475/photo/magic-pink-rhododendron-flowers-in-the-summer-mountain.jpg?s=612x612&w=is&k=20&c=1joPh81NVIT4aQeFT-bu9rPmezS6nfhhXI8EIWfP1A8="
    },
    {
        id: 2,
        title: "News Title 2.",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CBJorho6YGePkRtqPY5gj9l2RwFyfdqGTNlddvpwwLiN5b6RyrkbjMJo&s=10"
    },
    {
        id: 3,
        title: "News Title 3.",
        Image: "https://t3.ftcdn.net/jpg/00/49/54/56/360_F_49545683_bjOhdVIb84WtodAaXYLUTit3KjM0r0DJ.jpg"
    }];
export default function MainNews() {
    const [topNews, setTopNews] = useState(news);

    function renderArticle(item) {
        return (
            <ImageBackground resizeMode="cover" style={MainNewsStyles.backgroundImages} source={{ uri: item.Image }}>
                <View style={MainNewsStyles.subView}>
                    <View style={MainNewsStyles.subViewTitle}>
                        <Text style={MainNewsStyles.subViewTitleStyle}>Deadline</Text>
                    </View>
                    <Text style={MainNewsStyles.subViewDescription}>{item.title}</Text>
                </View>
            </ImageBackground>
        );
    }
    function addArticle() {
        const newArticle = {
            id: 5,
            title: "News Title 5.",
            Image: "https://t3.ftcdn.net/jpg/00/49/54/56/360_F_49545683_bjOhdVIb84WtodAaXYLUTit3KjM0r0DJ.jpg"
        };
        setTopNews(prevNews => [...prevNews, newArticle])
    }
    return (
        <View>
            <FlatList data={topNews}
                renderItem={({ item }) => renderArticle(item)}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled contentContainerStyle={MainNewsStyles.mainList} />
            <TouchableOpacity onPress={addArticle} style={{
                backgroundColor: "gold",
                padding: 10,
                marginVertical: 11,
                borderRadius: 10,
                alignItems : "center",
                alignSelf : "flex-start",
                marginHorizontal : 30
            }}>
                <Text>Add News</Text>
            </TouchableOpacity>
        </View>
    );
}