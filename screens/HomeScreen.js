import { View, Text, SafeAreaView, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MenuContainer from "../components/MenuContainer"
import CardContainer from '../components/CardContainer'
import { Searchbar } from 'react-native-paper';
import { Card } from 'react-native-paper';
import apiData from '../api';
import axios from "axios";
import TabIndicator from '../components/TabIndicator'

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { data, isLoading } = apiData()

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  const onChangeSearch = query => setSearchQuery(query);


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

        <View className="p-4 mt-3">
          <Card>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </Card>
        </View>
        <View className="p-4">
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        {/* Menu Container */}
        {isLoading ? <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View> :
          <ScrollView>
            <View className="flex-row items-center justify-between px-8 mt-2">
              <MenuContainer key={"Sea Point"} title="Sea Point" imgSrc="https://afar.brightspotcdn.com/dims4/default/3afd819/2147483647/strip/true/crop/728x500+36+0/resize/660x453!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2F4b%2F24%2F03651ad5232d51aede120100245d%2Foriginal-3506f677e614055848a42e645310e482.jpg" />
              <MenuContainer key={"Rondebosch"} title="Rondebosch" imgSrc="https://southafrica.co.za/images/ronderbosch-786x528.jpg" />
              <MenuContainer key={"Stellenbosch"} title="Stellenbosch" imgSrc="https://cdn.britannica.com/00/167200-050-6D8D42C3/Theological-Seminary-campus-Stellenbosch-University-province-South.jpg" />
            </View>

            <Text className="text-[22px] text-[#0B646B] mt-8 px-8 text-center font-bold">
              Find the best deals
            </Text>

            <View className="px-2 mt-8 flex-row items-center justify-evenly flex-wrap">
              {data.map((item) =>
                <CardContainer
                  key={item.name}
                  data={item}
                  imgSrc={item.photo ? item.photo.images.large.url : "https://southafrica.co.za/images/ronderbosch-786x528.jpg"}
                  title={item.name ? item.name : "test"}
                  location="quatar"
                />
              )}
            </View>

          </ScrollView>}
      </SafeAreaView>
      <TabIndicator />
    </>
  )
}

export default HomeScreen