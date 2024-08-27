import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {categories} from '../../constants/categories';
import {RootState} from '../../store/store';
import ProductCategories from './ProductCategories';
import Products from './Products';

const ProductDepartment: React.FC = () => {
  const dispatch = useDispatch();
  const [showFetchedData, setShowFetchedData] = useState(false);
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [categoriesToBeShown, setCategoriesToBeShown] = useState(categories);

  const navigationPath: string[] = useSelector(
    (state: RootState) => state.navigation.path,
  );
  useEffect(() => {
    let updatedCategories = categories;
    setShowFetchedData(false);

    if (navigationPath.length > 0) {
      navigationPath.forEach((subcategory: string) => {
        updatedCategories = updatedCategories.filter(category => {
          return category.name === subcategory;
        });

        if (
          updatedCategories.length > 0 &&
          updatedCategories[0].subcategories
        ) {
          updatedCategories = updatedCategories[0].subcategories;
        } else {
          setShowFetchedData(true);
          updatedCategories = [];
        }
      });
    }

    setCategoriesToBeShown(updatedCategories);
  }, [navigationPath]);

  return (
    <View style={styles.categoryContainer}>
      {showFetchedData ? (
        <Products />
      ) : (
        <ProductCategories categoriesToBeShown={categoriesToBeShown} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
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
  },
  departmentTitle: {
    fontSize: 18,
    color: '#153448',
  },
});

export default ProductDepartment;
