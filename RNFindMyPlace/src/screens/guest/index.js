import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
const Guest = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '3%',
          borderBottomWidth: 1,
          borderColor: 'lightgray',
          marginHorizontal: '3%',
        }}>
        <View>
          <Text>Adults </Text>

          <Text>Ages 18 and above </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text> -</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 20, color: 'gray'}}>
            {adults}
          </Text>
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text> +</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '3%',
          borderBottomWidth: 1,
          borderColor: 'lightgray',
          marginHorizontal: '3%',
        }}>
        <View>
          <Text>Children </Text>

          <Text>Ages 2 to 12</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}>
            <Text> -</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 20, color: 'gray'}}>
            {children}
          </Text>
          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}>
            <Text> +</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '3%',
          borderBottomWidth: 1,
          borderColor: 'lightgray',
          marginHorizontal: '3%',
        }}>
        <View>
          <Text>Infants </Text>

          <Text>Under 2 </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text> -</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 20, color: 'gray'}}>
            {infants}
          </Text>
          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text> +</Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default Guest;
