import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Resolved = () => {
  return (
    <View>
    <View className="bg-white">
      <Text className=" mx-3 mt-2 p-2 text-2xl text-black font-bold">
        Resolved Complaints
      </Text>
    </View>
  
   <View className='p-2 mx-2 my-2 bg-white' style={{borderRadius: 10}}>

 <View style={{position: 'absolute', top: 0, right: 0, margin: 16, borderRadius: 5}} className='bg-green-400 p-2' >
    <Text className='text-white font-bold'>#Resolved</Text>
 </View>

    <Text className='text-gray-500'>
        Complaint Number
    </Text>
    <Text className='text-black font-bold text-xl'>#0000524123</Text>

    <View className='flex-row mt-3'>
      <FontAwesome name='home' size={25} />
      <Text className='ml-2 text-black'> Address: Ministry of Education</Text>
    </View>
    <View className='flex-row mt-1'>
    <FontAwesome name='calendar' size={25} />
      <Text className='ml-2 text-black'> Jan 22, 2019 | 10:45</Text>
    </View>

   </View>

    </View>
  )
}

export default Resolved