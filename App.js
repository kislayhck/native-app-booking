import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from "./screens/HomeScreen"
import Booking from "./screens/Booking"
import BookingForm from "./screens/BookingForm"
import Profile from "./screens/Profile";
import AllBooking from "./screens/AllBooking";

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <PaperProvider>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="booking" component={Booking} />
            <Stack.Screen name="bookingForm" component={BookingForm} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="allBooking" component={AllBooking} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </PaperProvider>
  );
}