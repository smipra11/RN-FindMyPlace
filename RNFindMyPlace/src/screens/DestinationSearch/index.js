import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import styles from './styles';
import SeearchResult from '../../../assets/data/Search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearch = () => {
  const [inputText, SetInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="where are you going"
        value={inputText}
        onChangeText={SetInputText}
      />
      <FlatList
        data={SeearchResult}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Guest Screen')}>
            <View style={styles.iconcontainer}>
              <Entypo name={'location-pin'} size={25} />
            </View>
            <Text style={styles.locationtext}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};
export default DestinationSearch;
