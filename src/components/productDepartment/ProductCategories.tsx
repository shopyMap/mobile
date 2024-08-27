import {useTheme} from '@react-navigation/native';
import {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Category} from '../../constants/categories';
import {navigateToSubcategory} from '../../store/navigationSlice';
import {RootState} from '../../store/store';

interface Props {
  categoriesToBeShown: Category[];
}

const ProductCategories: FC<Props> = ({categoriesToBeShown}) => {
  const dispatch = useDispatch();

  const onDepartmentPressed = (subcategory: string, subcategoryUrl: string) => {
    dispatch(navigateToSubcategory({subcategory, subcategoryUrl}));
  };

  const isScrolling = useSelector(
    (state: RootState) => state.scrolling.isScrolling,
  );

  const {colors} = useTheme();

  return (
    <View style={styles.gridContainer}>
      {categoriesToBeShown.map(productDepartment => (
        <TouchableOpacity
          onPress={() =>
            onDepartmentPressed(
              productDepartment.name,
              productDepartment.urlPath,
            )
          }
          activeOpacity={isScrolling ? 1 : 0.5}
          key={productDepartment.name}
          style={styles.gridItem}>
          <Image
            source={productDepartment.img as ImageSourcePropType}
            style={styles.departmentImage}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.departmentTitle, {color: colors.text}]}>
              {productDepartment.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    flexBasis: '48%',
    backgroundColor: 'white',
    marginBottom: 10,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#153448',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  departmentImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    height: 50,
    justifyContent: 'center',
  },
  departmentTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProductCategories;
