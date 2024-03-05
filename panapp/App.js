import React from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigations from './Screens/Navigations';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Signup from './Screens/Signup';
import Jobs from './Screens/Components/Home/AllServices/Jobs';
import DailyMajduri from './Screens/Components/Home/AllServices/DailyMajduri'
import Complaint from './Screens/Components/Home/AllServices/Complaint';
import Pending from './Screens/Components/Home/AllServices/Complaint/Pending';
import Resolved from './Screens/Components/Home/AllServices/Complaint/Resolved';
import GetBill from './Screens/Components/Home/AllServices/GetBill';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
        <NavigationContainer>
          <Stack.Navigator
           screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name='Jobs' component={Jobs} />
            <Stack.Screen name="DailyMajduri" component={DailyMajduri} />
            <Stack.Screen name='Complaint' component={Complaint} />
            <Stack.Screen name="PendingComplaint" component={Pending} />
            <Stack.Screen name="ResolvedComplaint" component={Resolved} />
            <Stack.Screen name='GetBill' component={GetBill} />
            <Stack.Screen name="Navigations" component={Navigations} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  textShadow: {
    shadowColor: '#000',
    shadowOffset: {
      height: -2,
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
export default App;