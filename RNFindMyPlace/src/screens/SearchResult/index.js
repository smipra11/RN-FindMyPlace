import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/post/index';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const SearchResultScreen = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResults = await API.graphql(graphqlOperation(listPosts));
        setPost(postResults.data.listPosts.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};
export default SearchResultScreen;
