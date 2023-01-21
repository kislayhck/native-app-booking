import { View, Text, ScrollView, CheckBox, SafeAreaView,Image } from 'react-native'
import { TextInput, List, MD3Colors, Divider, Button, Modal, Portal, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'

const BookingForm = ({ route }) => {
    const data = route?.params?.param
    const [text, setText] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <Provider>
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
                <View className="flex-row items-center justify-between px-8 mt-2">
                    <List.Image variant="image" source={{ uri: data?.photo ? data.photo.images?.large?.url : "https://southafrica.co.za/images/ronderbosch-786x528.jpg" }} />
                    <View>
                        <Text className="text-[20px] text-[#0B646B]">{data?.name ? data?.name : "Thest Name"}</Text>
                    </View>
                </View>
                <Divider className="mt-2" />
                <ScrollView className="px-6">

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
                    <Divider className="mt-3" />

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
                    <Text className="px-2 mt-2">
                        Book in 150,000 destinations across the world. Booking.com's official site. Get Instant Confirmation. Book Your Car Rental. Airport Taxi available. Low Rates. Hotels. Read Real Guest Reviews. Hostels. We speak your language. Great Choice. Villas.

                    </Text>
                </ScrollView>
                <View className="relative top-2 px-8">
                    <Button icon="ticket" mode="elevated" onPress={showModal}>
                        Book Now!
                    </Button>
                </View>

            </SafeAreaView>
            <Portal>
                <Modal className="ml-5 mr-5" visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View className="p-8">
                        <Image source={{uri:"https://qph.cf2.quoracdn.net/main-qimg-80067bf5da4c7a72a1dd8e51de64cd14-lq"}} className="w-full h-60 object-cover p-5" />
                    </View>
                </Modal>
            </Portal>
        </Provider>
    )
}

export default BookingForm