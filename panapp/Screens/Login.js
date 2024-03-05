import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Signup from './Signup';
import { useEffect } from 'react';

const Login = () => {
  const Navigation = useNavigation();
  const sendTo = () =>{
    Navigation.navigate('Signup');
  }
  const doLogin = () => {
    Navigation.navigate('Navigations')
  }
  
  return (
    <View className=" bg-slate-100 h-screen">
      <View>
        <Text className=" mt-10 text-4xl text-sky-400 text-bold font-bold text-center">
          Login
        </Text>
      </View>
      <View className="container justify-center items-center mt-14">
        <TextInput
          placeholder="email"
          inputMode="text"
          className="w-72 shadow p-3 bg-white rounded-full"
        />
        <TextInput
          placeholder="password"
          inputMode="text"
          className="w-72 p-3 bg-white mt-5 rounded-full"
        />
        {/* <TextInput
          placeholder="repeat password"
          inputMode="text"
          className="w-72 p-3 bg-white mt-5 rounded-full"
        /> */}
        <Text className="text-sky-400 mt-4">Forget Password ?</Text>

        <TouchableOpacity onPress={doLogin} className="mt-24 bg-sky-400 rounded-full">
          <Text className="p-3 text-xl text-white font-bold px-14">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={sendTo}
        >
         <Text className="text-sky-400 mt-4">  Signup?  </Text>
        </TouchableOpacity>
        

      </View>
    </View>
  )
}

export default Login