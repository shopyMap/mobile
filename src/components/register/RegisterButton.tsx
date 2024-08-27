import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  ButtonProps,
} from 'react-native';

interface RegisterButtonProps extends ButtonProps {
  title: string;
  onPress?: () => void; // onPress should be optional
}

const RegisterButton: React.FC<RegisterButtonProps> = ({title, onPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderRadius: 35,
    alignItems: 'center',
    shadowColor: '#153448',
    elevation: 10,
    shadowOffset: {width: 0, height: 2},
  },
  buttonText: {
    color: '#153448',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RegisterButton;
