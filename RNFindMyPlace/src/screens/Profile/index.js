import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Auth} from 'aws-amplify';

const Profile = () => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        onPress={logout}
        style={{width: '30%', height: '5%', backgroundColor: '#c3c3c3'}}>
        <Text> Log out</Text>
      </Pressable>
    </View>
  );
};
export default Profile;
