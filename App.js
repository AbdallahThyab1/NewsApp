import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./src/screens/Home/HomeScreen.jsx";
import AppNavigator from "./src/navigation/AppNavigator.jsx";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}