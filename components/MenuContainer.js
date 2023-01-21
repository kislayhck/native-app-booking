import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const MenuContainer = ({title,imgSrc}) => {
  return (
    <TouchableOpacity className="items-center rounded-md justify-center space-y-2">
        <View className="w-24 h-24 items-center justify-center ">
            <Image  source={{uri:imgSrc}} className="w-full h-full object-contain rounded-full"/>
        </View>
        <Text className="text-[#00BCC9] font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer