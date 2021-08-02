import 'react-native-gesture-handler';

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Entype from 'react-native-vector-icons/Entypo';
import Post from './src/components/post';
import DestinationSearch from './src/screens/DestinationSearch';
import Guest from './src/screens/guest/index';

import HomeScreen from './src/screens/Home/index';
import SearchResultScreen from './src/screens/SearchResult';
import feed from './assets/data/feed';
const post1 = feed[0];
import Router from './src/navigation/router';
import {withAuthenticator} from 'aws-amplify-react-native';

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default withAuthenticator(App);
