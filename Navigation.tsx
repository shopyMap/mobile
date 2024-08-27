import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import LogInPage from './src/screens/LogInPage';
import MarketPage from './src/screens/MarketPage';
import SignUpPage from './src/screens/SignUpPage';

const HomeStack = createNativeStackNavigator();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="MarketPage" component={MarketPage} />
      <HomeStack.Screen
        name="Login"
        component={LogInPage}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Signup"
        component={SignUpPage}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const lightTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#D8EFD3',
    card: '#153448',
    text: '#153448',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const Navigation = () => {
  return (
    <NavigationContainer theme={lightTheme}>
      <HomeStackGroup />
      <StatusBar barStyle={'default'} />
    </NavigationContainer>
  );
};
