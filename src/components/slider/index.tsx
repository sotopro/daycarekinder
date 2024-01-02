import React from 'react';
import {FlatList} from 'react-native';
import {SliderItem} from './item';
import {Header} from './header';
import {styles} from './styles';
import {SliderItemType, SliderItems} from './types';

type SliderProps = {
  items: SliderItems;
  onPressItem: (item: SliderItemType) => void;
  onPressHeader: () => void;
};

export const Slider = ({
  items,
  onPressItem,
  onPressHeader,
}: SliderProps): JSX.Element => {
  const keyExtractor = (item: SliderItemType) => item.id;
  const renderItem = ({item}: {item: SliderItemType}) => (
    <SliderItem item={item} onPress={onPressItem} />
  );

  return (
    <>
      <Header onPress={onPressHeader} />
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
