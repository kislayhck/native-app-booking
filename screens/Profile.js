import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Divider, Button } from 'react-native-paper';
import TabIndicator from '../components/TabIndicator';

const Profile = () => {

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

                <View className="p-8">
                    <Avatar.Image size={64} source={{ uri: "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" }} />
                </View>
                <View className="px-7">
                    <Text className="text-[20px] p-2">User Name:- Test</Text>
                    <Divider />
                    <Text className="text-[20px] p-2">Email:- Test@gmail.com</Text>
                    <Divider />
                    <Text className="text-[20px] p-2">Address:- In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</Text>
                </View>

                <View className="p-6 w-100">
                    <Button className="p-2 w-100" mode="contained" onPress={() => console.log('Pressed')}>
                        Edit Profile
                    </Button>
                </View>
            </SafeAreaView>
            <TabIndicator />
        </>
    )
}

export default Profile