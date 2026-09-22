import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "../screens/Start/StartScreen.jsx";
import MainTabNavigator from "./MainTabNavigator.jsx";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Start"
                component={StartScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Home"
                component={MainTabNavigator}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
}