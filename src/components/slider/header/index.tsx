import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Daycare near me</Text>
      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};
