import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default function HomeScreen() {
  return (
    <View  className="flex-1 flex bg-white" >
      <ScrollView showsHorizontalScrollIndicator={false} className=" space-y-6">
        {/* avatar */}
        <View className=" mx-5 flex-row justify-between items-center mb-10 mt-10" >
            <Text className=" font-bold text-neutral-700 " style={{fontSize : wp(7)}} >Let's Discover!</Text>
            <TouchableOpacity>
                <Image source={require('../assets/images/avatar.png')} style={{width: wp(13), height : wp(13)}}/>
            </TouchableOpacity>

        </View>

      

      </ScrollView>
    </View>
  )
}