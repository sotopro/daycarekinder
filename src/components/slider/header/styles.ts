import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  link: {
    borderBottomColor: COLORS.PRIMARY[800],
    borderBottomWidth: 1,
  },
  linkText: {
    fontSize: 14,
    color: COLORS.PRIMARY[800],
  },
});
