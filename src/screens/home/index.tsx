import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import {Header, Slider} from '../../components';
import {DAYCARE} from '../../constants/data/daycare';
import {SliderItemType} from '../../components/slider/types';

export const Home = (): JSX.Element => {
  const onHandlePress = (item: SliderItemType) => {
    console.warn({item});
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listContainer}>
        <Slider items={DAYCARE} onPress={onHandlePress} />
      </View>
    </View>
  );
};
