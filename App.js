import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./src/screens/SettingsScreen.js";
import DetailsScreen from "./src/screens/DetailsScreen.js";

function HomeScreen({ navigation }) {  // 🔹 Recibir navigation como prop
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", {
          itemId: 86,
          otherParam: "anything you want here",
        })}
      />

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Dashboard" }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Details" }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings" }} />  
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
