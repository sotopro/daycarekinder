import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

type HeaderProps = {
  onPress: () => void;
};

export const Header = ({onPress}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Daycare near me</Text>
      <TouchableOpacity style={styles.link} onPress={onPress}>
        <Text style={styles.linkText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};
