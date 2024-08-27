import React from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import useScreenWidth from '../hooks/useScreenWidth';

interface TextAreaProps extends TextInputProps {
  placeholder: string;
  style?: ViewStyle;
  imageSrc?: ImageSourcePropType;
}

const CustomTextArea: React.FC<TextAreaProps> = ({
  placeholder,
  style,
  imageSrc,
  ...rest
}) => {
  const [text, onChangeText] = React.useState('');
  const screenWidth = useScreenWidth();
  let textAreaSize = screenWidth * 0.8;
  if (isNaN(textAreaSize) || textAreaSize <= 0) {
    textAreaSize = 200;
  }

  return (
    <SafeAreaView>
      <View style={[styles.inputContainer, {width: textAreaSize}]}>
        {imageSrc && <Image style={styles.glassImg} source={imageSrc} />}
        <TextInput
          placeholder={`${placeholder}`}
          placeholderTextColor="rgba(21, 52, 72, 0.4)"
          style={StyleSheet.flatten([
            styles.input,
            {width: textAreaSize},
            style,
            imageSrc ? {paddingLeft: 50} : {},
          ])}
          onChangeText={onChangeText}
          value={text}
          {...rest}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: 55,
    margin: 12,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 28,
    backgroundColor: 'white',
    color: '#153448',
    shadowColor: '#153448',
    elevation: 20,
    shadowOffset: {width: 0, height: 2},
  },
  glassImg: {
    position: 'absolute',
    top: '50%',
    left: 30,
    width: 20,
    height: 20,
    transform: [{translateY: -10}],
    zIndex: 2,
  },
});

export default CustomTextArea;
