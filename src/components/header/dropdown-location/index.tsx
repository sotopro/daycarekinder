/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {TouchableOpacity, Text, Image, View, FlatList} from 'react-native';
import {styles} from './style';
import {Locations} from '../types';

const CircleArrowDown = require('../../../../assets/icon/circle-arrow-down.png');

type DropdownLocationProps = {
  locations: Locations[];
  onLocation: (location: Locations) => void;
};

export const DropdownLocation = ({
  locations,
  onLocation,
}: DropdownLocationProps) => {
  const [selectLocation, setSelectLocation] = useState('Select Location');
  const [showDropdown, setShowDropdown] = useState(false);

  const onSelectLocation = () => {
    setShowDropdown(!showDropdown);
  };

  const onSelectedLocation = ({item}: {item: Locations}) => {
    setSelectLocation(item.name);
    setShowDropdown(!showDropdown);
    onLocation(item);
  };

  const renderItem = ({item}: {item: Locations}) => (
    <TouchableOpacity
      onPress={() => onSelectedLocation({item})}
      style={styles.itemContainer}>
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelectLocation} style={styles.dropdown}>
        <Text style={styles.dropdownText}>{selectLocation}</Text>
        <Image source={CircleArrowDown} style={styles.icon} />
      </TouchableOpacity>
      {showDropdown ? (
        <View style={styles.listContainer}>
          <FlatList
            data={locations}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            getItemLayout={(_, index) => ({
              length: 50,
              offset: 50 * index,
              index,
            })}
          />
        </View>
      ) : null}
    </View>
  );
};
