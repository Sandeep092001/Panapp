import { View, Text, ScrollView, FlatList  } from 'react-native'
import React from 'react'
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const trending = [
    {
      id: 1,
      color: 'bg-green-300',
      text: 'Government',
      date: '15 Nov 2023',
    },
    {
      id: 2,
      color: 'bg-pink-300',
      text: 'Announcements',
      date: '15 Nov 2023',
    },
    {
      id: 3,
      color: 'bg-sky-300',
      text: 'Government',
      date: '15 Nov 2023',
    },
    {
      id: 4,
      color: 'bg-blue-300',
      text: 'Government',
      date: '15 Nov 2023',
    },
    
  ];
  
  const TrendingComponent = ({color, text, date})=>{
    // console.log('color: ', color)
    const combinedClass=`${color} p-4 ml-2`;
    return (
      <View style={{borderRadius: 10, width: 200 }} className={combinedClass}>
       <Text className="text-lg text-white font-bold">{text}</Text>
       <Text className="text-xs font-medium text-white mt-10">{date}</Text>
      </View>
    )
  }

const Trendings = () => {
  return (

    <View className="mt-2 mx-2">
       <FlatList
        horizontal
        data={trending}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=><TrendingComponent key={item.id} color={item.color} text={item.text} date={item.date} /> }
       />
    </View>
 
  )
}

export default Trendings