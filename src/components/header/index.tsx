import React from 'react';
import {ProfileButton} from './profile-button';
import {styles} from './style';
import {View} from 'react-native';
import {SearchButton} from './search-button';
import {DropdownLocation} from './dropdown-location';
import {Locations} from './types';

const LOCATIONS: Locations[] = [
  {
    id: '123d-123d-123d-123d',
    name: 'Jakarta',
    image: 'https://picsum.photos/200/300',
    position: {
      latitude: 123,
      longitude: 123,
    },
  },
  {
    id: '133c-123c-133y-333p',
    name: 'Bandung',
    image: 'https://picsum.photos/200/400',
    position: {
      latitude: 444,
      longitude: 333,
    },
  },
];

export const Header = () => {
  const onSelect = () => {
    console.warn('Profile button was pressed');
  };

  const onSearch = () => {
    console.warn('Search button was pressed');
  };

  const onLocation = (location: Locations) => {
    console.warn('Location was pressed', location);
  };
  return (
    <View style={styles.container}>
      <ProfileButton onSelect={onSelect} />
      <DropdownLocation locations={LOCATIONS} onLocation={onLocation} />
      <SearchButton onSearch={onSearch} />
    </View>
  );
};
