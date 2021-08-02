import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import styles from './styles.js';
const PostCarsoulItem = ({post}) => {
  const width = useWindowDimensions().width;
  console.log(post);
  return (
    <View style={[styles.container, {width: width - 60}]}>
      <View style={styles.innercontainer}>
        <Image style={styles.Image} source={{uri: post.image}} />
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={styles.bedroom}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description}>
            {' '}
            {post.type} {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newprice}> {post.newPrice}</Text>
            /night
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCarsoulItem;
