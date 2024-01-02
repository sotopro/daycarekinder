import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  itemContainer: {
    width: 230,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
  itemHeaderContainer: {},
  itemLocationImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: COLORS.PRIMARY[50],
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '400',
  },
  itemDetails: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetailTitle: {
    paddingBottom: 10,
    gap: 10,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
  },
  itemDetailRating: {
    flexDirection: 'row',
  },
  itemRating: {
    fontSize: 12,
    fontWeight: '400',
    color: '#212121',
  },
  itemDetailFavorite: {},
});
