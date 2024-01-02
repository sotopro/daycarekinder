import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const SearchIcon = require('../../../../assets/icon/search.png');

type SearchButtonProps = {
  onSearch: () => void;
};

export const SearchButton = ({onSearch}: SearchButtonProps) => {
  return (
    <TouchableOpacity onPress={() => onSearch()} style={styles.container}>
      <Image source={SearchIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};
