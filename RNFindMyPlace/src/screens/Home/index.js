import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <Pressable
        style={styles.searchbutton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={{fontSize: 15, fontWeight: '600'}}>
          {' '}
          Where you are going?
        </Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/Image/House/Houseform.png')}
        style={styles.Image}>
        <View style={styles.gonear}>
          <Text style={styles.text}>Go Near</Text>
          <Pressable style={styles.button}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              {' '}
              Explore Nearby Stay
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
