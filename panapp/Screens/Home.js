import { View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import Carousels from './Components/Home/Carousels';
import Trendings from './Components/Home/Trendings';
import AllServices from './Components/Home/AllServices';

const Home = () => {
  
  return (
    <ScrollView>
    <View className="bg-gray-200 flex-1">
     <Carousels />
      <View className="p-5">
        <Text className="text-black font-bold text-2xl" >Trending on</Text>
      </View>

      <View>
        <Trendings />
      </View>

      <View>
        <AllServices />
      </View>
    </View>
    </ScrollView>
  )
}
export default Home;