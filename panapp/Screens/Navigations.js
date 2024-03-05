import { View, Text } from 'react-native'
import React from 'react'
// import Signup from './Screens/Signup';
// import Login from './Screens/Login';
import Home from './Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome.js';
import Login from './Login';
import Profile from './Profile';
import Notifications from './Notifications';
import Gallery from './Gallery';

const Tab = createMaterialBottomTabNavigator();

const Navigations = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    activeColor='#38bdf8'
    barStyle={{backgroundColor: 'white', height:50, marginBottom: 15}}
    labeled='false'
    
   >

   <Tab.Screen
    name='Home'
    component={Home}
    options={{
     tabBarLabel: 'Home',
     tabBarIcon: () => (
        <FontAwesomeIcons name="home" color="#38bdf8" size={25}  />
     ),
     
    }}
   />
 
    

   <Tab.Screen
    name='Gallery'
    component={Gallery}
    options={{
     tabBarLabel: 'Gallery',
     tabBarIcon: () => (
        <FontAwesomeIcons name="image" color="#38bdf8" size={25}  />
     ),
    }}
   />    

    <Tab.Screen
    name='Notifications'
    component={Notifications}
    options={{
     tabBarLabel: 'Notifications',
     tabBarIcon: () => (
        <FontAwesomeIcons name="bell" color="#38bdf8" size={25}  />
     ),
    }}
   />    

<Tab.Screen
    name='Profile'
    component={Profile}
    options={{
     tabBarLabel: 'Profile',
     tabBarIcon: () => (
        <FontAwesomeIcons name="user" color="#38bdf8" size={25}  />
     ),
    }}
   />  
   </Tab.Navigator>
  )
}

export default Navigations