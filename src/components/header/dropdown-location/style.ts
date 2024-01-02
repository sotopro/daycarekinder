import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    width: '80%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY[400],
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  dropdownText: {
    fontSize: 13,
    color: COLORS.TEXT,
  },
  icon: {
    width: 30,
    height: 30,
  },
  listContainer: {
    width: '80%',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignSelf: 'center',
  },
  itemContainer: {
    padding: 10,
  },
  item: {},
  separator: {
    height: 1,
    backgroundColor: COLORS.PRIMARY[400],
  },
});
