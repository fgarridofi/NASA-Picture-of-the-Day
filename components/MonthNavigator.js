import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MonthNavigator = ({ year, month, onPrevious, onNext }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPrevious}>
        <Image source={require('../assets/flecha_l.png')} style={styles.navIcon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{`${year}-${String(month).padStart(2, '0')}`}</Text>
      <TouchableOpacity onPress={onNext}>
        <Image source={require('../assets/flecha_r.png')} style={styles.navIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Nasalization',
  },
  navIcon: {
    width: 20,
    height: 20,
  },
});

export default MonthNavigator;
