import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home/HomeScreen.jsx";
import NewsDetailsScreen from "../screens/News/NewsDetailsScreen.jsx";

const Stack = createNativeStackNavigator();

export default function NewsStackNavigator() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="NewsHome"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="NewsDetails"
                component={NewsDetailsScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
}