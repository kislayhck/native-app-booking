import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CardContainer = ({imgSrc,title,location,data}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity 
     className="rounded-md border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[170px] my-2"
     onPress={() => navigation.navigate("booking")}
    >
        <Image source={{uri:imgSrc}} className="w-full h-40 object-cover" />
        <Text className="text-left">{title?.length > 12 ? `${title.slice(0,12)}..` : title}</Text>
    </TouchableOpacity>
  )
}

export default CardContainer