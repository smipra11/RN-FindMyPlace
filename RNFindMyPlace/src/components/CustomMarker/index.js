import React from 'react';
import {View, Text} from 'react-native';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const CustomMarker = ({coordinate, price, onPress, isselected}) => {
  return (
    <View>
      <Marker coordinate={coordinate} onPress={onPress}>
        <View
          style={{
            backgroundColor: isselected ? 'black' : 'white',
            padding: 5,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Text
            style={{fontWeight: 'bold', color: isselected ? 'white' : 'black'}}>
            {price}
          </Text>
        </View>
      </Marker>
    </View>
  );
};
export default CustomMarker;
