import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {SliderItemType} from '../types';

type SliderItemProps = {
  item: SliderItemType;
  onPress: (item: SliderItemType) => void;
};

export const SliderItem = ({item, onPress}: SliderItemProps) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(item)}>
      <View style={styles.itemHeaderContainer}>
        <Image
          style={styles.itemLocationImage}
          source={{uri: item.location.image}}
          resizeMode="cover"
        />
        <View style={styles.badge}>
          {/* <Image /> */}
          <Text
            style={
              styles.badgeText
            }>{`${item.location.location.distance} ${item.location.location.unit} away`}</Text>
        </View>
        <View style={styles.itemDetails}>
          <View style={styles.itemDetailTitle}>
            <Text style={styles.itemTitle}>{item.location.title}</Text>
            <View style={styles.itemDetailRating}>
              {/* <Image /> */}
              <Text style={styles.itemRating}>{item.location.rating}</Text>
            </View>
          </View>
          <View style={styles.itemDetailFavorite}>{/* <Image />  */}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
