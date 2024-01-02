import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import {DAYCARE} from '../../constants/data/daycare';
import {SliderItemType} from '../../components/slider/types';
import {Slider} from '../../components';
import {HomeProps} from '../../navigation/types';
import {ROUTES} from '../../navigation/constants/routes';

export const Home = ({navigation}: HomeProps): JSX.Element => {
  const onHandlePressItem = (item: SliderItemType) => {
    navigation.navigate(ROUTES.KINDER, {item});
  };
  const onHandlePressHeader = () => {
    navigation.navigate(ROUTES.NEARBY);
  };
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Slider
          items={DAYCARE}
          onPressItem={onHandlePressItem}
          onPressHeader={onHandlePressHeader}
        />
      </View>
    </View>
  );
};
