import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearch/index';
import Guest from '../screens/guest/index.js';

import HomeTabnavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabnavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearch}
          options={{
            title: 'How many people',
          }}
        />
        <Stack.Screen
          name="Guest Screen"
          component={Guest}
          options={{
            title: 'How many people',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
