import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/homepage";
import Scan from "./components/scan";
import Map from "./components/map";
import Complaint from "./components/complaint";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: true, title: 'Track 🚛' }}
        />
        <Stack.Screen name="Complaint" component={Complaint} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
