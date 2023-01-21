import { View, Text, ScrollView, CheckBox } from 'react-native'
import { TextInput, List, MD3Colors, Divider, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import React,{useLayoutEffect} from 'react'

const BookingForm = ({ route }) => {
    const data = route?.params?.param
    const [text, setText] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

    return (
        <View className="p-5">
            <View className="flex-row items-center justify-between">
                <List.Image variant="image" source={{ uri: data?.photo ? data.photo.images?.large?.url : "https://southafrica.co.za/images/ronderbosch-786x528.jpg" }} />
                <View>
                    <Text className="text-[20px] text-[#0B646B]">{data?.name ? data?.name : "Thest Name" }</Text>
                </View>
            </View>
            <View className="mt-3">
                <Text className="text-bold">
                    {data?.ranking}
                </Text>
                <Text>
                    {data?.bearing}
                </Text>
            </View>
            <Divider className="mt-2" />
            <ScrollView>

                <View className="mt-5">
                    <TextInput
                        mode="outlined"
                        label="Name"
                        placeholder="Type something"
                        right={<TextInput.Affix text="/100" />}
                    />
                </View>
                <View className="mt-5">
                    <TextInput
                        mode="outlined"
                        label="Email"
                        placeholder="Type something"
                        right={<TextInput.Affix text="/100" />}
                    />
                </View>
                <View className="mt-5">
                    <TextInput
                        mode="outlined"
                        label="Phone Number"
                        placeholder="Type something"
                        right={<TextInput.Affix text="/100" />}
                    />
                </View>
                <View className="mt-5">
                    <TextInput
                        mode="outlined"
                        multiline={true}
                        numberOfLines={4}
                        label="Address"
                        placeholder="Type something"
                        right={<TextInput.Affix text="/100" />}
                    />
                </View>
                <View className="mt-3 flex-row justify-between items-center">
                    <View className="w-60">
                    <TextInput
                        mode="outlined"
                        label="Pincode"
                        placeholder="Type something"
                        right={<TextInput.Affix text="/100" />}
                        />
                    </View>
                    <View className="w-35">
                    <Button className="relative bottom-0" mode="contained" onPress={() => console.log('Pressed')}>
                        Search
                    </Button>
                    </View>
                </View>
                <Divider className="mt-3"/>

                <View className="flex-row justify-between p-2">
                    <Text className="text-[20px]">
                        Total no. of rooms
                    </Text> 
                    <Text className="text-[20px]">2</Text>
                </View>
                <Divider />
                <View className="flex-row justify-between p-2">
                    <Text className="text-[20px]">
                        Total 
                    </Text> 
                    <Text className="text-[20px]">2</Text>
                </View>
                <Divider />
                <Text>
                Book in 150,000 destinations across the world. Booking.com's official site. Get Instant Confirmation. Book Your Car Rental. Airport Taxi available. Low Rates. Hotels. Read Real Guest Reviews. Hostels. We speak your language. Great Choice. Villas.

                </Text>
            </ScrollView>

            <Button className="relative top-20" icon="ticket" mode="elevated" onPress={() => console.log('Pressed')}>
                Book Now!
            </Button>
        </View>
    )
}

export default BookingForm