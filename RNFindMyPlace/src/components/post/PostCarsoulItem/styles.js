import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
  },
  innercontainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  Image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  prices: {
    fontSize: 16,
    marginTop: 10,
  },
  bedroom: {
    marginVertical: 10,

    color: 'gray',
  },
  description: {
    fontSize: 16,
  },
  oldprice: {
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 20,
  },
  newprice: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  totalprice: {
    textDecorationLine: 'underline',
    color: 'gray',
    fontSize: 16,
    marginTop: 5,
  },
});

export default styles;
