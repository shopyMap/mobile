import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomTextArea from '../components/CustomTextArea.tsx';
import OathContainer from '../components/register/OathContainer.tsx';
import RadioButton from '../components/register/RadioButton.tsx';
import RegisterButton from '../components/register/RegisterButton.tsx';
import useScreenWidth from '../hooks/useScreenWidth.ts';

const LogInPage: React.FC = () => {
  const screenWidth: number = useScreenWidth();
  const [pressedRadio, setPressedRadio] = useState(false);
  const navigation = useNavigation();
  const fontSize = screenWidth * 0.08 > 0 ? screenWidth * 0.08 : 16;

  const onSignupPressed = () => {
    navigation.goBack();
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[styles.titleText, {fontSize: fontSize}]}>Увійти</Text>
      </View>

      <View style={styles.form}>
        <CustomTextArea placeholder="e-пошта" />
        <CustomTextArea placeholder="пароль" />
      </View>

      <View style={styles.navText}>
        <RadioButton
          title={"Запам'ятати мене"}
          pressed={pressedRadio}
          onPress={() => setPressedRadio(!pressedRadio)}
        />
        <TouchableOpacity
          onPress={() => Alert.alert('Forget Password Pressed')}>
          <Text style={styles.forgetPasswordText}>Забули пароль?</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.butContainer]}>
        <RegisterButton
          title="Увійти"
          onPress={() => Alert.alert('Login Pressed')}
        />
        <RegisterButton title="Немає акаунта" onPress={onSignupPressed} />
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
  navText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  forgetPasswordText: {
    color: '#153448',
    textDecorationLine: 'underline',
  },
});

export default LogInPage;
