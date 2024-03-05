import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome.js'


const ImagePopup = ({visible, source, onClose}) => {
  return (
    <Modal
       animationType="slide"
       transparent={false}
       visible={visible}
       
      >
       
        <TouchableOpacity style={{position: 'absolute', top: 30, right: 10}} onPress={onClose} >
            <FontAwesome name="times" size={30} color="black"  />
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: source}}
          style={{width: 350, height: 250, resizeMode: 'contain', borderRadius: 5 }}
        />
        {/* <FontAwesome name="home" size={30} color="black" /> */}
        </View>
        
      </Modal>
  )
}

export default ImagePopup