import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  processColor,
} from 'react-native';
import styles from './styles';
import SeearchResult from '../../../assets/data/Search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [inputText, SetInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guest Screen');
          }}
          query={{
            key: '',
            language: 'en',
            type: '(cities)',
          }}
        />
      </View>
    </View>
  );
};
export default DestinationSearch;
