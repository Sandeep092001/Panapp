import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const notificationData = [
  {
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    text: 'Hello new notification',
  },
  {
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    text: 'Hello new notification',
  },
  {
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    text: 'Hello new notification',
  },
  {
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    text: 'Hello new notification',
  }
];

const notiRender = ({item}) =>{
  
  return(
    <View className="mx-4 my-1" style={{flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 1, borderColor: '#ccc'}}>
    <Image source={{uri: item.image}} style={{width: 40, height: 40, marginRight: 10, borderRadius: 5}} />
   <Text className="text-black flex-1">{item.text}</Text>
   </View>
    );
}

const Notifications = () => {

 


  return (
    <SafeAreaView >
     <View className=" bg-white">
      <Text className=" mx-3 mt-2 p-2 text-2xl text-black font-bold">Notifications</Text>
     </View>

    <View className="mt-2">
    {/* <Image source={{uri: ''}} /> */}

    <View className="mx-4 my-1" style={{flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 1, borderColor: '#ccc'}}>
     <Image source={{uri: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'}} style={{width: 40, height: 40, marginRight: 10, borderRadius: 5}} />
    <Text className="text-black flex-1">Something should be written here</Text>
    </View>
    
  <FlatList
    data={notificationData}
    keyExtractor={(item, index)=>index.toString()}
    renderItem={notiRender}
  />

    </View>

    </SafeAreaView>
  )
}

export default Notifications