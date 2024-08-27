import {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useScreenWidth from '../../hooks/useScreenWidth';
import {Product} from '../../types/products';
import ProductView from './ProductView';

interface StoreProductListProps {
  storeName: string;
  products: Product[];
}

const StoreProductList: FC<StoreProductListProps> = ({storeName, products}) => {
  const screenWidth = useScreenWidth();
  const containerWidth = screenWidth * 0.9;
  return (
    // <View style={[styles.storeContainer, {width: containerWidth}]}>
    <View style={[styles.storeContainer]}>
      <Text style={styles.storeName}>{storeName.toUpperCase()}</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ProductView product={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default StoreProductList;

const styles = StyleSheet.create({
  storeContainer: {
    padding: 10,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.8,
  },
});
