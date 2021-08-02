import React from 'react';
import {ViewBase, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import SearchResultScreen from '../screens/SearchResult/index';
import SearchResultsMap from '../screens/SearchResultsMap';

const SearchResultstabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={SearchResultScreen} />
      <Tab.Screen name="Map" component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultstabNavigator;
