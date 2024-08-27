import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CounterAction} from '../types/products';

interface Props {
  value: CounterAction;
}

const CounterButton: FC<Props> = ({value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#D8EFD3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#153448',
    fontSize: 20,
    opacity: 0.65,
  },
});

export default CounterButton;
