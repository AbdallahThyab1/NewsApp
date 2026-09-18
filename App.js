import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from "./src/screens/Home/HomeScreen.jsx"
export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <HomeScreen />
      </View>
      </SafeAreaProvider>
      );
}



