import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY[400],
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY[400],
  },
});
