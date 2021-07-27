import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  text: {
    width: '40%',
    fontWeight: '500',
    fontSize: 40,
    color: 'white',
  },
  gonear: {
    height: '60%',
    marginTop: '20%',
    width: '70%',
    marginLeft: '6%',
  },
  button: {
    width: '70%',
    backgroundColor: 'white',
    height: '10%',
    borderRadius: 5,
    marginTop: 30,
  },
  searchbutton: {
    width: Dimensions.get('screen').width - 80,
    marginHorizontal: 10,
    backgroundColor: 'white',
    height: '7%',
    borderRadius: 5,
    marginTop: 30,
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
