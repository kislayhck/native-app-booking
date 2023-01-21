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
import { useNavigation } from '@react-navigation/native'


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

    const navigation = useNavigation();

    return (
        <View className="flex-row bg-[#0B646B] justify-between px-8 p-3 ml-2 mr-2 rounded-md fixed bottom-10">
            <View onPress={() => navigation.navigate("profile")}>
                <Ionicons name="home" size="25" color="white" onPress={() => navigation.navigate("home")}/>
            </View>
            <View>
                <Ionicons name="list" size="25" color="white" onPress={() => navigation.navigate("allBooking")}/>
            </View>
            <View>
                <Ionicons name="person" size="25" color="white" onPress={() => navigation.navigate("profile")}/>
            </View>
        </View>
    )
}

export default TabIndicator