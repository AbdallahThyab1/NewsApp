import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ProfileScreen from "../screens/Profile/ProfileScreen";
import NewsStackNavigator from "./NewsStackNavigator.jsx";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Tab.Screen
                name="News"
                component={NewsStackNavigator}
                options={{
                    tabBarLabel: "الأخبار",

                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={
                                focused
                                    ? "newspaper"
                                    : "newspaper-outline"
                            }
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "الملف الشخصي",

                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={
                                focused
                                    ? "person"
                                    : "person-outline"
                            }
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}