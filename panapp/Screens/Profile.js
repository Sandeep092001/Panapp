import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      
      <Text className="text-center text-2xl font-bold text-black mt-5">Profile</Text>
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}> */}
      <View className='flex justify-center items-center mt-5'>
        <Image source={{uri: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'}} style={{width: 100, height: 100}} className='rounded-full' />
      </View>
      <Text className='text-black font-bold text-xl text-center'>Sandeep Singh</Text>
      <View className='mt-10 text-gray-500 bg-white'>
        <View className='m-4'>
        <Text className='text-xl '>About us</Text>
        <Text className='text-xl mt-2'>Contact us</Text>
        <Text className='text-xl mt-2'>Our Team</Text>
        <Text className='text-xl mt-2'>FAQ's</Text>
        <TouchableOpacity className='bg-sky-400 mt-4 rounded'>
          <Text className='text-white font-bold text-xl text-center p-2'>Logout</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Profile