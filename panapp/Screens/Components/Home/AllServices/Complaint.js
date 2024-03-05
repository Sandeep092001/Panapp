import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useNavigation} from '@react-navigation/native'

const Complaint = () => {
  
  const navigation = useNavigation();
  const Pending=()=>{
    navigation.navigate('PendingComplaint');
  }
  const Resolved=()=>{
    navigation.navigate('ResolvedComplaint');
  }

  return (
    <>
    <View className="bg-white">
      <Text className=" mx-3 mt-2 p-2 text-2xl text-black font-bold">
        Complaints
      </Text>
    </View>

    <View className="mt-2 flex-row" style={{ justifyContent: 'space-between'}}>
      <TouchableOpacity className='justify-start ml-3 bg-yellow-400 p-2' style={{borderRadius: 5, width: 120, flexDirection: 'row'}} onPress={Pending}>
          <FontAwesome name='exclamation-circle' size={30} />
          <Text className='text-white font-semibold text-center text-lg ml-1'>Pending</Text>
      </TouchableOpacity>

      <TouchableOpacity className='mr-3 bg-green-400 p-2' style={{borderRadius: 5, width: 120, flexDirection: 'row', justifyContent: 'flex-end'}} onPress={Resolved} >
          <FontAwesome name='check-circle' size={30} />
          <Text className='text-white font-semibold text-center text-lg ml-1'>Resolved</Text>
      </TouchableOpacity>
    </View>
<ScrollView>
   <View className='bg-sky-100 border-b border-t border-blue-500 text-blue-700 px-4 py-3 mt-4 shadow' role='alert'>
    <Text className="font-bold text-blue-400 text-lg">
      Information
    </Text>
    <Text className="text-sm">
      Fill out this form we will get back to you within 24 hours
    </Text>
   </View>

   <View className="max-w-lg m-3 mt-5">
  <View className="flex flex-wrap -mx-3 mb-6">
    <View className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <Text className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </Text>
      <TextInput className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      <Text className="text-red-500 text-xs italic">Please fill out this field.</Text>
    </View>
    <View className="w-full md:w-1/2 px-3">
      <Text className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </Text>
      <TextInput className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </View>
  </View>
  <View className="flex flex-wrap -mx-3 mb-6">
    <View className="w-full px-3">
      <Text className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
        Phone Number
      </Text>
      <TextInput className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="text" placeholder="0000 845 365" />
      <Text className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</Text>
    </View>
  </View>
  <View className="flex flex-wrap -mx-3 mb-2">
    <View className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <Text className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
       Full  Address
      </Text>
      <TextInput className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="1254 vishwasnagar" />
    </View>
  
    <View className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <Text className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-complaint">
        Complaint
      </Text>
      <TextInput style={{height: 'auto'}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-complaint" type="text" multiline={true} numberOfLines={6} placeholder="Enter your complaint" />
    </View>

  </View>

 <TouchableOpacity className='p-2 bg-sky-400 mb-5' style={{borderRadius: 5}}>
  <Text className='text-lg font-bold text-white text-center'>Complaint</Text>
 </TouchableOpacity>

</View>
</ScrollView>
</>
  
  )
}

export default Complaint