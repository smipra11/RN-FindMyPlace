import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './styles.js';
const Post = ({post}) => {
  console.log(post);
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{uri: post.image}} />
      <Text style={styles.bedroom}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description}>
        {' '}
        {post.type} {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldprice}>{post.oldPrice}</Text>
        <Text style={styles.newprice}> {post.newPrice}</Text>
        /night
      </Text>
      <Text style={styles.totalprice}>{post.totalPrice}</Text>
    </View>
  );
};

export default Post;
