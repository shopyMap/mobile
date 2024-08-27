import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const OathContainer = () => {
  return (
    <View style={styles.oathContainer}>
      <Text style={styles.oathText}>Увійти за допомогою</Text>

      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/imgs/signup-login/google.png')}
          style={styles.socialIcon}
        />
        <Image
          source={require('../../assets/imgs/signup-login/apple.png')}
          style={styles.socialIcon}
        />
        <Image
          source={require('../../assets/imgs/signup-login/facebook.png')}
          style={styles.socialIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  oathContainer: {
    gap: 30,
    alignItems: 'center',
  },
  oathText: {
    marginBottom: 10,
    fontSize: 16,
    color: 'rgba(21, 52, 72, 0.5)',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  socialIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default OathContainer;
