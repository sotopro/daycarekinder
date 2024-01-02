import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type ProfileButtonProps = {
  onSelect: () => void;
};

export const ProfileButton = ({onSelect}: ProfileButtonProps) => {
  return (
    <TouchableOpacity onPress={() => onSelect()} style={styles.container}>
      <Image
        source={{uri: 'https://ui-avatars.com/api/?name=Peter+Doe'}}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};
