import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView from 'react-native-maps';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarsoulItem from '../../components/post/PostCarsoulItem/index';

const SearchResultsMap = () => {
  const width = useWindowDimensions().width;
  const [selectedId, setSelectedId] = useState(null);
  const flatlist = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedId || !flatlist) {
      return;
    }
    const index = Places.findIndex(place => place.id === selectedId);
    flatlist.current.scrollToIndex({index});
  }, [selectedId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {Places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isselected={place.id === selectedId}
            onPress={() => setSelectedId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={Places}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <PostCarsoulItem post={item} />}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
