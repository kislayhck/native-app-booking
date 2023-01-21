import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Divider, Button } from 'react-native-paper';
import TabIndicator from '../components/TabIndicator';
import { List } from 'react-native-paper';

const AllBooking = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <>
            <SafeAreaView className="flex-1 bg-white relative">
                <View className="flex-row items-center justify-between px-8">
                    <View>
                        <Text className="text-[30px] text-[#0B646B] font-bold">Booking!</Text>
                        <Text>See the Magic!</Text>
                    </View>

                    <View className="w-12 h-12 bg-gray-600 rounded-md items-center justify-center">
                        <Text className="text-[30px] text-white font-bold">K</Text>
                    </View>
                </View>

                <View className="bg-gray-100 ml-4 mr-4 mt-10 text-white">
                    <List.Item
                        title="Booking 1"
                        description="Item description"
                        left={props => <List.Icon {...props} icon="ticket" />}
                    />
                </View>
                <View className="bg-gray-100 ml-4 mr-4 mt-5 color-white">
                    <List.Item
                        title="Booking 2"
                        description="Item description"
                        left={props => <List.Icon {...props} icon="ticket" />}
                    />
                </View>
                <View className="bg-gray-100 ml-4 mr-4 mt-5 color-white">
                    <List.Item
                        title="Booking 3"
                        description="Item description"
                        left={props => <List.Icon {...props} icon="ticket" />}
                    />
                </View>
            </SafeAreaView>
            <TabIndicator />
        </>
    )
}

export default AllBooking