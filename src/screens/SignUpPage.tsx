import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import CustomTextArea from '../components/CustomTextArea.tsx';
import OathContainer from '../components/register/OathContainer.tsx';
import RadioButton from '../components/register/RadioButton.tsx';
import RegisterButton from '../components/register/RegisterButton.tsx';
import useScreenWidth from '../hooks/useScreenWidth.ts';

const SignUpPage: React.FC = () => {
  const screenWidth: number = useScreenWidth();
  const [pressedRadio, setPressedRadio] = useState(false);
  const navigation = useNavigation();
  const fontSize = screenWidth * 0.08 > 0 ? screenWidth * 0.08 : 16;
  const rememberMeRightSpace = screenWidth * 0.05 > 0 ? screenWidth * 0.18 : 40;

  const onLoginPressed = () => {
    navigation.goBack();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[styles.titleText, {fontSize: fontSize}]}>
          Зареєструватись
        </Text>
      </View>

      <View style={styles.form}>
        <CustomTextArea placeholder="e-пошта" />
        <CustomTextArea placeholder="пароль" />
        <CustomTextArea placeholder="підтвердіть пароль" />
      </View>

      <RadioButton
        title="Запам'ятати мене"
        pressed={pressedRadio}
        onPress={() => setPressedRadio(!pressedRadio)}
        style={{position: 'relative', right: rememberMeRightSpace}} // Pass custom styles here
      />

      <View style={[styles.butContainer]}>
        <RegisterButton
          title="Створити"
          onPress={() => Alert.alert('Create Account Pressed')}
        />
        <RegisterButton title="Вже є акаунт" onPress={onLoginPressed} />
      </View>

      <OathContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8EFD3',
    padding: 16,
  },
  title: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: '#153448',
  },
  form: {},
  butContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  rememberMe: {
    position: 'relative',
    flexDirection: 'row',
    gap: 9,
    justifyContent: 'flex-start',
  },
  beforeElement: {
    width: 18,
    height: 18,
    borderRadius: 50,
  },
  rememberMeText: {
    color: 'rgba(21, 52, 72, 0.5)',
  },
});

export default SignUpPage;
