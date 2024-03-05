import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HistoryData=[
{
    from: 'JAN',
    to: 'MAR',
    date: '10 MAR 2022 at 7:45 pm',
    paid: '1059'  
}
];
const History = ({item}) =>{
    return (
   <View
        className="border-b border-gray-400 border-1 bg-sky-100 "
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 10
        }}>
        <View>
          <Text className='font-bold'> {item.from} - {item.to} </Text>
          <Text className='text-xs mt-1'>{item.date}</Text>
        </View>
        <View className="flex-row justify-items-center">
          <Text className='font-bold mr-2 mt-1'> {item.paid} Rs. </Text>

          <FontAwesome name="check" size={25} color="green" />
        </View>
      </View>
   
    )
}
const PaidHistory = () => {
  return (
    <View className="mt-4">
        <FlatList 
         data={HistoryData}
         keyExtractor={(item, index) => index.toString()}
         renderItem={History}
        />
    </View>
  );
};

export default PaidHistory;
