import {useTheme} from '@react-navigation/native';
import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  navigateToSubcategory,
  resetNavigation,
} from '../../store/navigationSlice';
import {RootState} from '../../store/store';

interface Props {}

const NavList: FC<Props> = ({}) => {
  const navigationPath: string[] = useSelector(
    (state: RootState) => state.navigation.path,
  );

  const navigationUrlPath: string[] = useSelector(
    (state: RootState) => state.navigation.urlPath,
  );

  const dispatch = useDispatch();

  const onNavItemClicked = (navItem: string) => {
    const indexOfNavItem = navigationPath.indexOf(navItem);
    console.log(`indexOfNavItem: ${indexOfNavItem}`);
    console.log(navigationUrlPath);
    dispatch(
      navigateToSubcategory({
        subcategory: navItem,
        subcategoryUrl: navigationUrlPath[indexOfNavItem],
      }),
    );
  };

  const {colors} = useTheme();

  return (
    <View style={styles.breadcrumbContainer}>
      {navigationPath.length > 0 && (
        <TouchableOpacity onPress={() => dispatch(resetNavigation())}>
          <Text style={[styles.breadcrumbText, {color: colors.text}]}>
            Головна
          </Text>
        </TouchableOpacity>
      )}

      {navigationPath.map((navItem, index) => (
        <View key={navItem} style={styles.breadcrumbItem}>
          <Text style={[styles.breadcrumbSeparator, {color: colors.text}]}>
            -
          </Text>
          <TouchableOpacity
            disabled={navigationPath[navigationPath.length - 1] === navItem}
            onPress={() => onNavItemClicked(navItem)}>
            <Text style={[styles.breadcrumbText, {color: colors.text}]}>
              {navItem}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumbContainer: {
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbText: {
    fontSize: 16,
    paddingHorizontal: 5,
  },
  breadcrumbSeparator: {
    fontSize: 16,
  },
  breadcrumbItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NavList;
