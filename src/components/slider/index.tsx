import React from 'react';
import {FlatList} from 'react-native';
import {SliderItem} from './item';
import {Header} from './header';
import {styles} from './styles';
import {SliderItemType, SliderItems} from './types';

type SliderProps = {
  items: SliderItems;
  onPress: (item: SliderItemType) => void;
};

export const Slider = ({items, onPress}: SliderProps): JSX.Element => {
  const keyExtractor = (item: SliderItemType) => item.id;
  const renderItem = ({item}: {item: SliderItemType}) => (
    <SliderItem item={item} onPress={onPress} />
  );

  return (
    <>
      <Header />
      <FlatList
        data={items}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </>
  );
};
