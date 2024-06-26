import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const SearchByDateButton = ({ setShowPicker }) => (
  <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.button}>
    <Text style={styles.buttonText}>Search by Date</Text>
    <Image source={require('../assets/calendar.png')} style={styles.icon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#061f4a',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nasalization',
    marginRight: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default SearchByDateButton;
