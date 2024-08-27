import axios from 'axios';
import {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {StoreProducts} from '../../types/products';
import StoreProductList from './StoreProductList'; // Make sure this import points to the correct file

interface Props {}

const Products: FC<Props> = () => {
  const [products, setProducts] = useState<StoreProducts | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigationUrlPath = useSelector(
    (state: RootState) => state.navigation.urlPath,
  );

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      const urlPath = navigationUrlPath.join('/');
      try {
        const response = await axios.get<StoreProducts>(
          `https://smartshopbackend.onrender.com/products/${urlPath}`,
        );
        setProducts(response.data);
      } catch (err) {
        setError('There was a problem with the fetch operation.');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#153448" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!products) {
    return (
      <View style={styles.center}>
        <Text>No products found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={Object.keys(products)}
      renderItem={({item: storeName}) => (
        <StoreProductList
          storeName={storeName}
          products={products[storeName]}
        />
      )}
      keyExtractor={storeName => storeName}
      contentContainerStyle={styles.container}
    />
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});
