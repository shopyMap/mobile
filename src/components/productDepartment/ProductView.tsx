import {useTheme} from '@react-navigation/native';
import {FC, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CounterAction, Product} from '../../types/products';
import CounterButton from '../CounterButton';

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({product}) => {
  const [amount, setAmount] = useState<Number>(Number(1));
  const {colors} = useTheme();

  const incrementAmount = () => {
    setAmount(prevAmount => Number(prevAmount) + 1);
  };

  const decrementAmount = () => {
    if (Number(amount) > 1) {
      setAmount(prevAmount => Number(prevAmount) - 1);
    }
  };

  return (
    <View>
      <Image source={{uri: product.imgUrl}} style={styles.productImage} />
      <Text style={[styles.price, {color: colors.text}]}>
        {product.price} грн
      </Text>

      <View style={styles.amountContainer}>
        <TouchableOpacity onPress={decrementAmount}>
          <CounterButton value={CounterAction.MINUS} />
        </TouchableOpacity>
        <Text style={{color: colors.text}}>{String(amount)}</Text>
        <TouchableOpacity onPress={incrementAmount}>
          <CounterButton value={CounterAction.PLUS} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.toBucketContainer}>
        <Text style={[styles.toBucketText, {color: colors.text}]}>
          В корзину
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  price: {
    textAlign: 'center',
  },
  amountContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  toBucketContainer: {
    marginTop: 8,
  },
  toBucketText: {
    textAlign: 'center',
    opacity: 0.5,
  },
});

export default ProductView;
