import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {KinderProps} from '../../navigation/types';

export const Kinder = ({route}: KinderProps) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
    </View>
  );
};
