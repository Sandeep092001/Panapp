import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const jobsData = [
  {
    image:
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    Job: 'Hello new notification',
    Post: 'Post',
    Place: 'Place',
    Date: '15/03/2023',

  },
  {
    image:
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    Job: 'Hello new notification',
    Post: 'Post',
    Place: 'Place',
    Date: '15/03/2023',
  },
  {
    image:
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    Job: 'Hello new notification',
    Post: 'Post',
    Place: 'Place',
    Date: '15/05/2023',
  },
  {
    image:
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    Job: 'Hello new notification',
    Post: 'Post',
    Place: 'Place',
    Date: '15/04/2023',
  },
  {
    image:
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    Job: 'Hello new notification',
    Post: 'Post',
    Place: 'Place',
    Date: '15/05/2023',
  },
  {
    image:
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    Job: 'Hello new notification',
    Post: 'Post',
    Place: 'Place',
    Date: '15/04/2023',
  },
  {
    image:
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    Job: 'Hello new notification',
    Post: 'Post',
    Place: 'Place',
    Date: '15/05/2023',
  },
  {
    image:
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    Job: 'Hello new notification',
    Post: 'Post',
    Place: 'Place',
    Date: '15/04/2023',
  },
];

const jobsRender = ({item}) => {
  return (
    <TouchableOpacity
      className="mx-4 my-1"
      style={{
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      }}>
      <View>
        <Image
          source={{uri: item.image}}
          style={{width: 45, height: 45, marginRight: 15, borderRadius: 5}}
        />
      </View>
      <View>
        <Text className="text-black text-xl font-bold">{item.Job}</Text>
        <Text className="text-black text-lg font-semibold">{item.Post}</Text>
        <Text className="text-gray-400 text-lg font-semibold">{item.Place}</Text>
        <Text className="text-xs mt-4 text-sky-400">{item.Date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Jobs = () => {
  return (
    <SafeAreaView>
      <View className="bg-white">
        <Text className=" mx-3 mt-2 p-2 text-2xl text-black font-bold">
          Jobs
        </Text>
      </View>

      <View className="mt-2 mb-28 bg-white">
        {/* <Image source={{uri: ''}} /> */}

        <FlatList
          data={jobsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={jobsRender}
        />
      </View>
    </SafeAreaView>
  );
};

export default Jobs;
