import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import Login from './Login';
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

const Signup = () => {
  const Navigation = useNavigation();
  const sendTo = () =>{
  
    Navigation.navigate('Login');
  }
  return (
    <View className=" bg-slate-100 h-screen">
      <View>
        <Text className=" mt-10 text-4xl text-sky-400 text-bold font-bold text-center">
          SignUp
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
        <TextInput
          placeholder="repeat password"
          inputMode="text"
          className="w-72 p-3 bg-white mt-5 rounded-full"
        />
       
         <Text className="text-sky-400 mt-4">Forget Password ?</Text>
     
       

        <TouchableOpacity className="mt-24 bg-sky-400 rounded-full">
          <Text className="p-3 text-xl text-white font-bold px-14">
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={sendTo}
        >
        <Text className="text-sky-400 mt-4">  Login?  </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
