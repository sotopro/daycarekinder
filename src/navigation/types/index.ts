import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SliderItemType} from '../../components/slider/types';
import {ROUTES} from '../constants/routes';

export type MainStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.KINDER]: {item: SliderItemType};
  [ROUTES.NEARBY]: undefined;
};

export type HomeProps = NativeStackScreenProps<MainStackParamList, ROUTES.HOME>;
export type KinderProps = NativeStackScreenProps<
  MainStackParamList,
  ROUTES.KINDER
>;
export type NearbyProps = NativeStackScreenProps<
  MainStackParamList,
  ROUTES.NEARBY
>;
