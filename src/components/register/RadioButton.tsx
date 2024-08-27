import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
} from 'react-native';

interface RadioButtonProps {
  title: string;
  pressed: boolean;
  onPress: () => void;
  style?: ViewStyle; // Add a style prop to accept custom styles
}

const RadioButton: React.FC<RadioButtonProps> = ({
  title,
  pressed,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.radioContainer, style]} onPress={onPress}>
      <View
        style={[styles.radio, {backgroundColor: pressed ? '#153448' : 'white'}]}
      />
      <Text style={styles.radioText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 50,
    marginRight: 8,
  },
  radioText: {
    color: 'rgba(21, 52, 72, 0.5)',
  },
});

export default RadioButton;
