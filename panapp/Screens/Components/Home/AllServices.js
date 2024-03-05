import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import FontAwesome from  'react-native-vector-icons/FontAwesome6';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { PropsWithChildren, } from 'react';
import { useNavigation } from '@react-navigation/native';

const AllServices = () => {
  
const navigation = useNavigation();

const goTo = () =>{
 navigation.navigate('Jobs');
}

const majduri = () =>{
  navigation.navigate('DailyMajduri');
}

const Complaint  = () =>{
  navigation.navigate('Complaint');
}

const getBill  = () =>{
  navigation.navigate('GetBill');
}

  return (
    <View className='mb-5'>
    <View className="mt-4 ml-4">
      <Text className="text-black font-bold text-2xl">All Services</Text>
      </View>
      <View className="mt-2 mx-3">
        <View className="flex-row space-x-2 ">
            <TouchableOpacity className="bg-white shadow flex-1" style={{height: 100, width:'50%', borderRadius: 15}} onPress={getBill}>

               <View className="p-2 flex-1 justify-start">
                 <FontAwesome name="file-invoice" size={30} color="#38bdf8" />
               </View>

               <View className="flex-1 justify-end p-2">
                 <Text className="text-black font-bold text-xl">Get Bill</Text>
                 <Text className="text-xs text-gray-500 font-medium">Bill | Paid | Pending </Text>
               </View>
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-white shadow flex-1 justify-items-center" style={{height: 100, width:'50%', borderRadius: 15}} onPress={goTo}>
            
            <View className="p-2 flex-1 justify-start">
                 <FontAwesome name="briefcase" size={30} color="#38bdf8" />
               </View>

              
               <View className="flex-1 justify-end p-2">
                 <Text className="text-black font-bold text-xl">Jobs</Text>
                 <Text className="text-xs text-gray-500 font-medium">Get Paid | Openings </Text>
               </View>
       
            </TouchableOpacity>
          
        </View>
        <View className="flex-row space-x-2 mt-2">
            <TouchableOpacity className="bg-white shadow flex-1 justify-items-center " style={{height: 100, width:'50%', borderRadius: 15}}>

            <View className="p-2 flex-1 justify-start">
                 <FontAwesome name="bullhorn" size={30} color="#38bdf8" />
               </View>

            <View className="flex-1 justify-end p-2">
                 <Text className="text-black font-bold text-xl">Announcements</Text>
                 <Text className="text-xs text-gray-500 font-medium">Bill | Paid | Pending </Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white shadow flex-1 justify-items-center" style={{height: 100, width:'50%', borderRadius: 15}} onPress={Complaint} >

            <View className="p-2 flex-1 justify-start">
                 <FontAwesome name="dropbox" size={30} color="#38bdf8" />
               </View>

            <View className="flex-1 justify-end p-2">
                 <Text className="text-black font-bold text-xl">Complaints</Text>
                 <Text className="text-xs text-gray-500 font-medium">Bill | Paid | Pending </Text>
               </View>
            </TouchableOpacity>
        </View>
        <View className="flex-row space-x-2 mt-2">
            <TouchableOpacity className="bg-white shadow flex-1 justify-items-center " style={{height: 100, width:'50%', borderRadius: 15}}>

            <View className="p-2 flex-1 justify-start">
                 <FontAwesome name="face-smile" size={30} color="#38bdf8" />
               </View>

            <View className="flex-1 justify-end p-2">
                 <Text className="text-black font-bold text-xl">Benefits</Text>
                 <Text className="text-xs text-gray-500 font-medium">Bill | Paid | Pending </Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white shadow flex-1 justify-items-center" style={{height: 100, width:'50%', borderRadius: 15}} onPress={majduri}>

            <View className="p-2 flex-1 justify-start">
                 <FontAwesome name="money-bill-wave" size={30} color="#38bdf8" />
               </View>

            <View className="flex-1 justify-end p-2">
                 <Text className="text-black font-bold text-xl">Daily Majduri</Text>
                 <Text className="text-xs text-gray-500 font-medium">Bill | Paid | Pending </Text>
               </View>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    
  )
}

export default AllServices