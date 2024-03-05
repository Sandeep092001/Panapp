import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import BillCard from './GetBill/BillCard';
import PaidHistory from './GetBill/PaidHistory';
import Offers from './GetBill/Offers';

const GetBill = () => {
  const [showOffers, setshowOffers] = useState(false);
  const [showHistory, setshowHistory] = useState(true);
  const visibilityHistory = () => {
    setshowHistory(true);
    setshowOffers(false);
  };
  const visibilityOffers = () => {
    setshowHistory(false);
    setshowOffers(true);
  };
  const classHistory = showHistory ? 'text-red-400' : 'text-gray-400';
  const combinedClassHistory = `font-bold text-xl ${classHistory}`;

  const classOffer = showOffers ? 'text-red-400' : 'text-gray-400';
  const combinedClassOffer = `font-bold text-xl ${classOffer}`;

  return (
    <View>
      <BillCard />
      <View className="mt-4">
        <View className="flex-row space-x-4 mx-2">
          <TouchableOpacity onPress={visibilityHistory}>
            <Text className={combinedClassHistory}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={visibilityOffers}>
            <Text className={combinedClassOffer}>Offers</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        showHistory ? (
          <PaidHistory />
        ):(
          <Offers />
        )
      }
      
    </View>
  );
};

export default GetBill;
