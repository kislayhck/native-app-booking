import React from 'react'
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen"
import Profile from "../screens/Profile";
import AllBooking from "../screens/AllBooking";


//Screen names
const homeName = "Home";
const detailsName = "Booking Form";
const booking = "Booking";
const profile = "Profile";
const allBooking = "AllBooking";


function TabIndicator() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';

                    } else if (rn === detailsName) {
                        iconName = focused ? 'list' : 'list-outline';

                    }
                    else if (rn === allBooking) {
                        iconName = focused ? 'pricetags' : 'pricetags-outline';

                    }
                    else if (rn === profile) {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70 }
            }}>

            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={allBooking} component={AllBooking} />
            <Tab.Screen name={profile} component={Profile} />
        </Tab.Navigator>
    )
}

export default TabIndicator