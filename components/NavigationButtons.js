import React from 'react';
import { View, Animated, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const NavigationButtons = ({ date, handlePrevious, handleNext, scaleAnimLeft, scaleAnimRight, onButtonPressIn, onButtonPressOut }) => (
  <View style={styles.navigationButtons}>
    <AnimatedTouchableOpacity
      onPress={handlePrevious}
      style={[styles.navButton, { transform: [{ scale: scaleAnimLeft }] }]}
      onPressIn={() => onButtonPressIn(scaleAnimLeft)}
      onPressOut={() => onButtonPressOut(scaleAnimLeft)}
    >
      <Image source={require('../assets/flecha_l.png')} style={styles.navIcon} />
      <Text style={styles.buttonText}>Anterior</Text>
    </AnimatedTouchableOpacity>
    {new Date().toISOString().split('T')[0] !== date.toISOString().split('T')[0] && (
      <AnimatedTouchableOpacity
        onPress={handleNext}
        style={[styles.navButton, { transform: [{ scale: scaleAnimRight }] }]}
        onPressIn={() => onButtonPressIn(scaleAnimRight)}
        onPressOut={() => onButtonPressOut(scaleAnimRight)}
      >
        <Text style={styles.buttonText}>Próximo</Text>
        <Image source={require('../assets/flecha_r.png')} style={styles.navIcon} />
      </AnimatedTouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#061f4a',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  navIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nasalization',
  },
});

export default NavigationButtons;
