import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/index';
import SearchResultScreen from '../screens/SearchResult/index';
//import SearchResultsTabNavigator from './SearchResultsTabNavigator';
import SearchResultstabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultstabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
