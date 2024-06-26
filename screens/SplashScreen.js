import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Animated,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {toValue: 1, duration: 500,useNativeDriver: true,}),
      Animated.spring(scale, {toValue: 1.2,friction: 2,tension: 160, useNativeDriver: true,}),
      Animated.spring(scale, {toValue: 1,friction: 2,tension: 160,useNativeDriver: true,}),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace('NASA Picture of the day');
      }, 500);
    });
  }, [navigation, opacity, scale]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
        <Animated.Image
          source={require('../assets/splash.png')}
          style={[styles.logo, { transform: [{ scale }] }]}
        />
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#061f4a',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 173,
    height: 160,
  },
});

export default SplashScreen;
