import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const BillCard = () => {
  return (
    <View>
      <View className="bg-white">
        <Text className=" mx-3 mt-2 p-2 text-2xl text-black font-bold">
          Get Your Bill
        </Text>
      </View>
      <View className=" mx-2 my-2">
        <LinearGradient
          colors={['#3498db', '#e74c3c']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{height: 200, borderRadius: 10}}
        />
        <View
          style={{
            position: 'absolute',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text className="text-white p-2">AMOUNT DUE</Text>
            <Text className="text-white px-2 text-xl font-bold">15959 Rs</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text className="text-white p-2">FROM</Text>
              <Text className="text-white px-2 text-base font-bold">
                02 JAN 2023
              </Text>
            </View>

            <View>
              <Text className="text-white pl-40 pt-2">DUE DATE</Text>
              <Text className="text-white font-bold text-base pt-2 pl-36">
                02 MAR 2023
              </Text>
            </View>
          </View>

          <TouchableOpacity
            className="flex-1 bg-sky-400 p-3 justify-items-center mx-5 mt-4"
            style={{flex: 1, justifyContent: 'center', borderRadius: 10}}>
            <Text className="text-white text-center font-bold text-lg">
              Pay Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BillCard;
