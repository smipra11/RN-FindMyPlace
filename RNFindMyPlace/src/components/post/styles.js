import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  Image: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
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
