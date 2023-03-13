import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './src/LoginScreen';
import DashboardScreen from './src/DashboardScreen';
import DetailScreen from './src/DetailScreen';
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})