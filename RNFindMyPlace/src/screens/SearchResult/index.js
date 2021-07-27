import React from 'react';
import {View, Text, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/post/index';
const SearchResultScreen = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};
export default SearchResultScreen;
