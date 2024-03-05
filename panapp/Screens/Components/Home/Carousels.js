import { View, Text } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box';

const Carousels = () => {
    const img = [
        require('../../../assets/images/home.jpg'),
        require('../../../assets/images/home2.jpg'),
        ];

  return (
    <View>
      <SliderBox
       images={img}
       SliderBoxHeight={200}
       onCurrentImagePressed = {(index) => console.warn(`image ${index} pressed`)}
       dotColor="#38bdf8"
       inactiveDotColor="#90A4AE"
       paginationBoxVerticalPadding = {20}
       imageLoadingColor="#38bdf8"
       ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
       autoplay
       autoplayInterval={5000}
       circleLoop
      />
    </View>
  )
}

export default Carousels