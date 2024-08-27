import {FC} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {resetNavigation} from '../../store/navigationSlice';
import NavList from './NavList';

interface HeaderProps {
  navShown: boolean;
}

const Header: FC<HeaderProps> = ({navShown}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => dispatch(resetNavigation())}>
          <Image source={require('../../assets/imgs/menu.png')} />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>SmartShop</Text>
        </View>
        <View>
          <Image source={require('../../assets/imgs/cart.png')} />
        </View>
      </View>

      <View style={styles.navHeight}>{navShown && <NavList />}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  headerTitle: {
    opacity: 0.5,
    fontFamily: 'DidactGothic-Regular',
    fontSize: 24,
  },
  navHeight: {
    height: 30,
  },
});

export default Header;
