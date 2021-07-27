import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import styles from './styles';
import SeearchResult from '../../../assets/data/Search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearch = () => {
  const [inputText, SetInputText] = useState('');
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
          <View style={styles.row}>
            <View style={styles.iconcontainer}>
              <Entypo name={'location-pin'} size={25} />
            </View>
            <Text style={styles.locationtext}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default DestinationSearch;
