import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import CalendarPicker from 'react-native-calendar-picker';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Booking = ({ route }) => {

    const [selectDate, setSelectDate] = useState("");
    const [selectedOne, setSelectedOne] = useState(false);
    const tempdata = ["loream", "dsad", "sdasd", "loream", "dsad", "sdasd"]
    const days1 = ["9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00"]
    const days12 = ["12:00 - 01:00", "02:00 - 03:00", "03:00 - 04:00"]


    const navigation = useNavigation();
    const data = route?.params?.param

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    useEffect(() => {
        if (selectDate.toString().includes('Mon')) {
            setSelectedOne(true);
        } else if (selectDate.toString().includes('Tue')) {
            setSelectedOne(true);

        }
        else if (selectDate.toString().includes('Wed')) {
            setSelectedOne(true);

        }
        else {
            setSelectedOne(false);

        }
    },[selectDate])

    const handleChange = (date) => {
        setSelectDate(date)
    }

    return (
        <SafeAreaView>
            <View>
                <View className="px-3 mt-8">
                    <Text className="text-[20px] text-[#0B646B] font-bold">{data?.name}</Text>
                    <Text>Select the Date</Text>
                </View>
            </View>
            <View className="mt-5">
                <CalendarPicker onDateChange={handleChange} />
            </View>
            <ScrollView>
                <View className="ml-10 mt-3 mb-5">
                    {selectedOne ?
                        days1.map((item) =>
                            <TouchableOpacity onPress={() => navigation.navigate("bookingForm", { param: data })} className="flex-row h-20 w-80 items-center justify-center p-3 bg-slate-400 mt-5 rounded-sm">
                                <Card.Title
                                    title={item}
                                    subtitle="Card Subtitle"
                                    left={(props) => <Avatar.Icon {...props} icon="calendar" />}

                                />
                            </TouchableOpacity>
                        ) : days12.map((item) =>
                            <TouchableOpacity onPress={() => navigation.navigate("bookingForm", { param: data })} className="flex-row h-20 w-80 items-center justify-center p-3 bg-slate-400 mt-5 rounded-sm">
                                <Card.Title
                                    title={item}
                                    subtitle="Card Subtitle"
                                    left={(props) => <Avatar.Icon {...props} icon="calendar" />}

                                />
                            </TouchableOpacity>)}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Booking